const router = require('express').Router()
const Order = require('../db/models/order')
const User = require('../db/models/user')

module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const {email, imageUrl, firstName, lastName, password} = req.body
    if (email.length === 0) {
      res.status(401).send('Invalid Email')
    }
    const [instance, wasCreated] = await User.findOrCreate({
      where: {email}
    })
    if (wasCreated) {
      instance.firstName = firstName
      instance.imageUrl = imageUrl
      instance.lastName = lastName
      instance.password = password
      await instance.save()
    } else {
      res.status(401).send('User already exists')
    }
    const cart = await Order.create()
    instance.addOrder(cart)
    req.login(instance, err => (err ? next(err) : res.json(instance)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))
