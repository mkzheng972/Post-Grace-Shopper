const router = require('express').Router()
const {Noodle} = require('../db/models')
const {adminOnly} = require('./utils')
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

router.post('/', adminOnly, async (req, res, next) => {
  try {
    const customNoodle = await Noodle.create(req.body)
    res.json(customNoodle)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', adminOnly, async (req, res, next) => {
  try {
    const updateNoodle = await Noodle.findByPk(req.params.id)
    updateNoodle.update(req.body)
    res.json(updateNoodle)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', adminOnly, async (req, res, next) => {
  try {
    const deleteNoodle = await Noodle.findByPk(req.params.id)
    if (!deleteNoodle) {
      return res.sendStatus(404)
    }
    await deleteNoodle.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
