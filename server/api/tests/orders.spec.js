const {expect} = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../index')
const agent = require('supertest')(app)
const Order = db.model('order')
const User = db.model('user')

describe('Order routes', () => {
  const fakeUser = {
    firstName: 'cody',
    lastName: 'cafe',
    email: 'cody@email.com',
    isAdmin: true
  }
  const fakeOrder = [
    {
      status: 'completed',
      name: 'cody'
    },
    {
      status: 'pending',
      name: 'cody'
    }
  ]

  beforeEach(async () => {
    const createdOrders = await Order.bulkCreate(fakeOrder)
    let storedOrders = createdOrders.map(order => order.dataValues)
    const createdUser = await User.create(fakeUser)
  })

  xdescribe('Get all orders', () => {
    it('serves up all orders', async () => {
      const response = await agent.get('/api/orders', fakeUser).expect(200)
      expect(response.body).to.be.an('array')
      expect(response.body[0].status).to.equal('completed')
    })
  })

  xdescribe('Get single order', () => {
    it('serves up all orders associated with user', async () => {
      const response = await agent.get(`/api/orders/1`, fakeUser).expect(200)
      expect(response.body.status).to.be('pending')
      expect(response.body.name).to.equal('cody')
    })
  })
})
