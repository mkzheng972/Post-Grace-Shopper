const router = require('express').Router()
const {Order} = require('../db/models')
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

//for specific user with their Id.
router.get('/:id', async (req, res, next) => {
  try {
    if (req.user.isAdmin || (req.user && req.user.id === req.params.id)) {
      const userHistory = await Order.findAll({
        where: {
          userId: req.params.id
        }
      })
      res.json(userHistory)
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})
