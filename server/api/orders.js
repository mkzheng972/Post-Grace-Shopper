const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allNoodle = await Order.findAll()
    res.json(allNoodle)
  } catch (error) {
    next(error)
  }
})
