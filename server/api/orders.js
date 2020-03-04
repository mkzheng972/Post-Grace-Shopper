const router = require('express').Router()
const {Order, Noodle, User} = require('../db/models')
module.exports = router

//Yan - what does this do? Is this for your cart?
//There is another get request below that might/will conflict with yours so i commented it out for now
// router.get('/:id', async (req, res, next) => {
//   try {
//     const [instance, wasCreated] = await Order.findOrCreate({
//       where: {userId: req.params.id}
//     })
//     res.json(allNoodle)
//   } catch (error) {
//     next(error)
//   }
// })

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

router.post('/', async (req, res, next) => {
  try {
    const order = await Order.create({
      total: req.body.total,
      date: new Date(),
      status: 'completed',
      instructions: req.body.instructions
    })
    if (order) {
      const noodles = await Promise.all(
        req.body.noodles.map(noodle => {
          return Noodle.findOne({where: {id: noodle.id}})
        })
      )
      await Promise.all(
        noodles.map(noodle => {
          return noodle.addOrder(order, {through: {quantity: 20}})
        })
      )
    }
  } catch (error) {
    next(error)
  }
})

//for specific user with their Id.
router.get('/:id', async (req, res, next) => {
  try {
    if (req.user.isAdmin || (req.user && req.user.id == req.params.id)) {
      const userHistory = await Order.findAll({
        where: {
          userId: req.params.id
        }
      })
      // const userHistory = await Order.findAll({
      //   include: {
      //     model: Noodle,
      //     where: {
      //       userId: req.params.id
      //     }
      //   }
      // })
      res.json(userHistory)
    } else {
      res.sendStatus(403)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/history/:id', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.params.id
      }
    })
    console.log('becart', cart)
    res.json(cart)
  } catch (error) {
    next(error)
  }
})
