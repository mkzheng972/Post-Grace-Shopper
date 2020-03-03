const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

//Only for Admin.
router.get('/', async (req, res, next) => {
  try {
    const users = await Order.findAll({})
    res.json(users)
  } catch (error) {
    next(error)
  }
})

//for specific user with their Id.
router.get('/:id', async (req, res, next) => {
  try {
    const userHistory = await Order.findAll({
      where: {
        userId: req.params.id
      }
    })
    res.json(userHistory)
  } catch (error) {
    next(error)
  }
})
