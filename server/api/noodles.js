const router = require('express').Router()
const {Noodle} = require('../db/models')

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
