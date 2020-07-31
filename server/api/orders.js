const router = require('express').Router()

const {Order, Noodle, User, OrderItem} = require('../db/models')
const {adminOnly, selfUserOrderOnly, selfUserOnly} = require('./utils')
module.exports = router

//Getting all orders in DB 'admin only'
router.get('/', async (req, res, next) => {
  try {
    const users = await Order.findAll({})
    res.json(users)
  } catch (error) {
    next(error)
  }
})

//To establish relationship between an order and a noodle. Add a Noodle to Cart functionality. 'selfUserOrderOnly'
router.put('/:orderId', async (req, res, next) => {
  try {
    const noodle = await Noodle.findByPk(req.body.id)
    const cart = await Order.findByPk(req.params.orderId)
    await cart.addNoodle(noodle, {
      through: {price: noodle.price, quantity: noodle.quantity}
    })
    res.json(noodle)
  } catch (error) {
    next(error)
  }
})

//Checkout Route
router.put('/', async (req, res, next) => {
  try {
    const cart = await Order.findByPk(req.body.id)
    cart.update(req.body)
    const user = await User.findByPk(req.user.id)
    const newOrder = await Order.create()
    await user.addOrder(newOrder)
    const newCart = await Order.findOne({
      where: {
        id: newOrder.id
      },
      include: [
        {
          model: Noodle
        }
      ]
    })
    res.json(newCart)
  } catch (error) {
    next(error)
  }
})

//Get user only pending cart
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

//Removing a noodle from the order
router.delete('/:orderId/:noodleId', async (req, res, next) => {
  try {
    await OrderItem.destroy({
      where: {
        orderId: req.params.orderId,
        noodleId: req.params.noodleId
      }
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
