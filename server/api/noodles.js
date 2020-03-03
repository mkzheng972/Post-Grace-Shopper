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

router.get('/:noodleId', async (req, res, next) => {
  try {
    const noodle = await Noodle.findOne({
      where: {id: req.params.noodleId}
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
