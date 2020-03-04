const router = require('express').Router()
const {Noodle} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allNoodle = await Noodle.findAll()
    res.json(allNoodle)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const noodle = await Noodle.findOne({
      where: {id: req.params.id}
    })
    if (!noodle) {
      res.sendStatus(404)
    } else {
      res.json(noodle)
    }
  } catch (error) {
    next(error)
  }
})
//customNoodle - Admin access only
router.post('/', async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const customNoodle = await Noodle.create(req.body)
      res.json(customNoodle)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})
//updateNoodle - Admin access only
router.put('/:id', async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const updateNoodle = await Noodle.findByPk(req.params.id)
      updateNoodle.update(req.body)
      res.json(updateNoodle)
    }
  } catch (error) {
    next(error)
  }
})
// deleteNoodle - Admin access only
router.delete('/:id', async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      // find by id first then destroy the found response
      const deleteNoodle = await Noodle.findByPk(req.params.id)
      if (!deleteNoodle) {
        return res.sendStatus(404)
      }
      await deleteNoodle.destroy()
      res.sendStatus(204)
      // await Noodle.destroy({
      //   where: {
      //     id: req.params.id
      //   }
      // })
    }
  } catch (error) {
    next(error)
  }
})
