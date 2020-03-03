const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.param('id', async (req, res, next, id) => {
  try {
    const foundUser = await User.findById(id)
    if (!foundUser) {
      res.sendStatus(404)
    } else {
      req.requestedUser = foundUser
    }
  } catch (error) {
    next(error)
  }
})

//Only for admin later development
router.get('/', async (req, res, next) => {
  console.log(req.user.isAdmin)
  try {
    if (req.user.isAdmin) {
      const users = await User.findAll({
        // explicitly select only the id and email fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        attributes: ['id', 'email']
      })
      res.json(users)
    } else {
      res.sendStatus(403)
    }
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    if (req.user.isAdmin || (req.user && req.user.id === req.params.id)) {
      const foundUser = req.requestedUser
      res.json(foundUser)
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const createdUser = await User.create(req.body)
      res.status(201)
      res.json(createdUser)
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    if (req.user.isAdmin || (req.user && req.user.id === req.params.id)) {
      const updatedUser = await req.requestedUser.update(req.body)
      res.json(updatedUser)
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    if ((req.user.isAdmin && req.user) || req.user.user) {
      await req.requestedUser.destroy()
      res.sendStatus(204)
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})
