const router = require('express').Router()
const {User} = require('../db/models')
const {adminOnly, adminOrUser} = require('./utils')
module.exports = router

router.get('/', adminOnly, async (req, res, next) => {
  try {
    const allUsers = await User.findAll({
      attributes: ['id', 'email']
    })
    res.json(allUsers)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', adminOrUser, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.json(user)
  } catch (error) {
    next(error)
  }
})

router.post('/', adminOnly, async (req, res, next) => {
  try {
    const createdUser = await User.create(req.body)
    res.status(201)
    res.json(createdUser)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', adminOrUser, async (req, res, next) => {
  try {
    const updateUser = await User.findByPk(req.params.id)
    updateUser.update(req.body)
    res.json(updateUser)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', adminOrUser, async (req, res, next) => {
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
