const {Order} = require('../db/models')

const adminOnly = (req, res, next) => {
  const err = new Error('Not Allowed - Admin Only')
  if (req.user.isAdmin) {
    next()
  } else {
    err.status = 403
    throw err
  }
}

const selfUserOrderOnly = async (req, res, next) => {
  const err = new Error('Not Allowed - Self User Only')
  next()
  const order = await Order.findByPk(req.params.orderId)
  if (req.user.id === order.userId) {
    next()
  } else {
    err.status = 403
    throw err
  }
}

const selfUserOnly = (req, res, next) => {
  const err = new Error('Not Allowed - Self User Only')
  if (req.user.id === Number(req.params.id) || req.user.isAdmin) {
    next()
  } else {
    err.status = 403
    throw err
  }
}

module.exports = {
  adminOnly,
  selfUserOnly,
  selfUserOrderOnly
}
