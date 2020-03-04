const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

//Only for admin later development
router.get('/', async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const allUsers = await User.findAll({
        // explicitly select only the id and email fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        attributes: ['id', 'email']
      })
      res.json(allUsers)
    } else {
      res.sendStatus(403)
    }
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    if (req.user.isAdmin || (req.user && req.user.id == req.params.id)) {
      const user = await User.findByPk(req.params.id)
      res.json(user)
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
    if (req.user.isAdmin || (req.user && req.user.id == req.params.id)) {
      const updateUser = await User.findByPk(req.params.id)
      updateUser.update(req.body)
      res.json(updateUser)
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
      const deleteUser = await User.findByPk(req.params.id)
      if (!deleteUser) {
        return res.sendStatus(404)
      }
      await deleteUser.destroy()
      res.sendStatus(204)
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})
