const router = require('express').Router()

const {Order, Noodle, User} = require('../db/models')
const {adminOnly, adminOrUser} = require('./utils')
module.exports = router

router.get('/', adminOnly, async (req, res, next) => {
  try {
    const users = await Order.findAll({})
    res.json(users)
  } catch (error) {
    next(error)
  }
})

router.get('/cart', async (req, res, next) => {
  try {
    if (req.user) {
      const cart = await Order.findOne({
        where: {
          userId: req.user.id,
          isCart: true
        },
        include: [
          {
            model: Noodle
          }
        ]
      })
      if (!cart) {
        return res.json([])
      }
      if (!req.session.cart) {
        req.session.cart = cart.products.map(product => product.lineItem)
      }
      return res.json(req.session.cart)
    }
    if (req.session.cart) {
      return res.json(req.session.cart)
    }

    res.json([])
  } catch (err) {
    next(err)
  }
})

router.post('/', adminOrUser, async (req, res, next) => {
  try {
    const order = await Order.create({
      total: req.body.total,
      date: new Date(),
      status: 'completed',
      instructions: req.body.instructions
    })
    if (order) {
      const noodles = await Promise.all(
        req.body.noodles.map(noodle => {
          return Noodle.findOne({where: {id: noodle.id}})
        })
      )
      await Promise.all(
        noodles.map(noodle => {
          return noodle.addOrder(order, {through: {quantity: 20}})
        })
      )
    }
  } catch (error) {
    next(error)
  }
})

//for specific user with their Id.
router.get('/:id', adminOrUser, async (req, res, next) => {
  try {
    const userHistory = await Order.findAll({
      where: {
        userId: req.params.id
      }
    })
    // const userHistory = await Order.findAll({
    //   include: {
    //     model: Noodle,
    //     where: {
    //       userId: req.params.id
    //     }
    //   }
    // })
    res.json(userHistory)
  } catch (error) {
    next(error)
  }
})

router.get('/history/:id', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.params.id
      }
    })
    console.log('becart', cart)
    res.json(cart)
  } catch (error) {
    next(error)
  }
})
