const router = require('express').Router()

const {Order, Noodle, User} = require('../db/models')
const {adminOnly, selfUserOnly} = require('./utils')
module.exports = router

router.get('/', adminOnly, async (req, res, next) => {
  try {
    const users = await Order.findAll({})
    res.json(users)
  } catch (error) {
    next(error)
  }
})

router.put('/:orderId', adminOnly, selfUserOnly, async (req, res, next) => {
  try {
    console.log('req.body', req.body)
    const noodle = await Noodle.findByPk(req.body.id)
    console.log('instance', noodle)
    const cart = await Order.findByPk(req.params.orderId)
    await cart.addNoodle(noodle, {through: {price: noodle.price}})
    res.json(noodle)
  } catch (error) {
    next(error)
  }
})

// router.post('/', adminOrUser, async (req, res, next) => {
// 	try {
// 		const order = await Order.create({
// 			total: req.body.total,
// 			date: new Date(),
// 			status: 'completed',
// 			instructions: req.body.instructions
// 		});
// 		if (order) {
// 			const noodles = await Promise.all(
// 				req.body.noodles.map((noodle) => {
// 					return Noodle.findOne({ where: { id: noodle.id } });
// 				})
// 			);
// 			await Promise.all(
// 				noodles.map((noodle) => {
// 					return noodle.addOrder(order, { through: { quantity: 20 } });
// 				})
// 			);
// 		}
// 	} catch (error) {
// 		next(error);
// 	}
// });

//for specific user with their Id.
router.get('/:id', adminOnly, selfUserOnly, async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error)
  }
})

//This route needs further work because we need to merge cart with localStore
router.get('/history/:id', adminOnly, selfUserOnly, async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.params.id,
        status: 'pending'
      },
      include: [{model: Noodle}]
    })
    console.log('becart', cart)
    res.json(cart)
  } catch (error) {
    next(error)
  }
})
