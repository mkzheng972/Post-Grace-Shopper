/* global describe beforeEach it */
/*
const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      let user = User.create({
        email: codysEmail,
        password: '123',
        isAdmin: true
      })
      return user
    })

    xit('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body).to.have.length(1)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
*/
