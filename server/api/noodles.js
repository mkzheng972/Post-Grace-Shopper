const router = require('express').Router()
const {Noodle} = require('../db/models')
const {adminOnly} = require('./utils')
module.exports = router

//For all noodles
router.get('/', async (req, res, next) => {
  try {
    const allNoodle = await Noodle.findAll()
    res.json(allNoodle)
  } catch (error) {
    next(error)
  }
})

//For single noodle
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

//Creating a new noodle 'admin only'
router.post('/', adminOnly, async (req, res, next) => {
  try {
    const customNoodle = await Noodle.create(req.body)
    res.json(customNoodle)
  } catch (error) {
    next(error)
  }
})

//Editing an existing noodle 'admin only'
router.put('/:id', adminOnly, async (req, res, next) => {
  try {
    const updateNoodle = await Noodle.findByPk(req.params.id)
    updateNoodle.update(req.body)
    res.json(updateNoodle)
  } catch (error) {
    next(error)
  }
})

//Delete an existing noodle 'admin only'
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
