const router = require('express').Router()
const {Order, Noodle, User, OrderItem} = require('../db/models')
module.exports = router

//Only for Admin.
router.get('/', async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const users = await Order.findAll({})
      res.json(users)
    } else {
      res.sendStatus(403)
    }
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

router.post('/', async (req, res, next) => {
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
router.get('/:id', async (req, res, next) => {
  try {
    if (req.user.isAdmin || (req.user && req.user.id == req.params.id)) {
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
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})
