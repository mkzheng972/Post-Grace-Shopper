const router = require('express').Router()
const {User, Noodle, Order} = require('../db/models')
const {adminOnly, selfUserOnly} = require('./utils')
module.exports = router

//Get all users 'admin only'
router.get('/', adminOnly, async (req, res, next) => {
  try {
    const allUsers = await User.findAll({
      attributes: [
        'id',
        'email',
        'firstName',
        'lastName',
        'imageUrl',
        'isAdmin'
      ]
    })
    res.json(allUsers)
  } catch (error) {
    next(error)
  }
})

//Get single user 'selfUserOnly'
router.get('/:id', selfUserOnly, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.json(user)
  } catch (error) {
    next(error)
  }
})

//Create a new user by an admin 'admin only'
router.post('/', adminOnly, async (req, res, next) => {
  try {
    const createdUser = await User.create(req.body)
    const newOrder = await Order.create()
    createdUser.addOrder(newOrder)
    res.status(201)
    res.json(createdUser)
  } catch (error) {
    next(error)
  }
})

//Updating user 'selfUserOnly'
router.put('/:id', selfUserOnly, async (req, res, next) => {
  try {
    const updateUser = await User.findByPk(req.params.id)
    updateUser.update(req.body)
    res.json(updateUser)
  } catch (error) {
    next(error)
  }
})

//Deleting an user 'admin only'
router.delete('/:id', adminOnly, async (req, res, next) => {
  try {
    const deleteUser = await User.findByPk(req.params.id)
    if (!deleteUser) {
      return res.sendStatus(404)
    }
    await deleteUser.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

//get all order for a specific user
router.get('/history/:id', selfUserOnly, async (req, res, next) => {
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
    res.json(userHistory)
  } catch (error) {
    next(error)
  }
})
