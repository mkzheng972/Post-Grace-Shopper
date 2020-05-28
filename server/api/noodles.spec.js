/*
const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Noodle = db.model('noodle')

describe('Noodle routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
  describe('Get `/api/noodles`', () => {
    const beef = {
      name: 'Spicy Beef Noodle Soup',
      noodleType: 'hand-pulled',
      imageUrl: '',
      description: 'Beef with Noodle with Soup',
      price: 999,
      stock: 0,
      isCustom: false
    }
    beforeEach(() => {
      return Noodle.create(beef)
    })
    it('serves up all noodles', async () => {
      const response = await request(app)
        .get('/api/noodles')
        .expect(200)
      expect(response.body).to.be.an('array')
      expect(response.body).to.have.length(1)
    })
  })
})
*/
