const router = require('express').Router()
const {OrderItem} = require('../db/models')
module.exports = router

router.put('/:cartId/:noodleId/:quantity', async (req, res, next) => {
  try {
    const orderItem = await OrderItem.findOne({
      where: {
        orderId: req.params.cartId,
        noodleId: req.params.noodleId
      }
    })
    orderItem.quantity = req.params.quantity
    orderItem.save()
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})
