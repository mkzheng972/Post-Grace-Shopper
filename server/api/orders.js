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

router.put('/:orderId', async (req, res, next) => {
  try {
    const noodle = await Noodle.findByPk(req.body.id)
    const cart = await Order.findByPk(req.params.orderId)
    await cart.addNoodle(noodle, {through: {price: noodle.price}})
    res.json(noodle)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const cart = await Order.findByPk(req.body.id)
    cart.update(req.body)
    const user = await User.findByPk(req.user.id)
    const newCart = await Order.create()
    await user.addOrder(newCart)
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

//This route needs further work because we need to merge cart with localStore
router.get('/pending/:id', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.params.id,
        status: 'pending'
      },
      include: [{model: Noodle}]
    })
    res.json(cart)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id/:noodleId', async (req, res, next) => {
  try {
    const cart = await Order.findByPk(req.params.id)
    const noodle = await Noodle.findByPk(req.params.noodleId)
    await cart.removeNoodle(noodle)
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
