const router = require('express').Router()

const {Order, Noodle, User, OrderItem} = require('../db/models')
const {adminOnly, selfUserOnly} = require('./utils')
module.exports = router

router.get('/', adminOnly, async (req, res, next) => {
  try {
    const users = await Order.findAll({})
    res.json(users)
  } catch (error) {
    next(error)
  }
})

router.put('/:orderId', selfUserOnly, async (req, res, next) => {
  try {
    // console.log('req.body', req.body)
    const noodle = await Noodle.findByPk(req.body.id)
    // console.log('instance', noodle)
    const cart = await Order.findByPk(req.params.orderId)
    await cart.addNoodle(noodle, {through: {price: noodle.price}})
    res.json(noodle)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    console.log('req', req)
    const cart = await Order.findByPk(req.body.id)
    cart.update(req.body)
    const user = await User.findByPk(req.user.id)
    const newCart = await Order.create()
    await user.addOrder(newCart)
    console.log('NEW CART', newCart)
    const newnewCart = await Order.findOne({
      where: {
        id: newCart.id
      },
      include: [
        {
          model: Noodle
        }
      ]
    })
    res.json(newnewCart)
  } catch (error) {
    next(error)
  }
})

//for specific user with their Id.
router.get('/:id', adminOnly, selfUserOnly, async (req, res, next) => {
  try {
    const userHistory = await Order.findAll({
      where: {
        userId: req.params.id
      },
      include: [
        {
          model: Noodle
        }
      ]
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

//This route needs further work because we need to merge cart with localStore
router.get('/history/:id', selfUserOnly, async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.params.id,
        status: 'pending'
      },
      include: [{model: Noodle}]
    })
    // console.log('becart', cart)
    res.json(cart)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id/:noodleId', selfUserOnly, async (req, res, next) => {
  try {
    const cart = await Order.findByPk(req.params.id)
    const noodle = await Noodle.findByPk(req.params.noodleId)
    await cart.removeNoodle(noodle)
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
