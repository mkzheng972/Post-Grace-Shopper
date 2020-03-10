const {expect} = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../index')
const agent = require('supertest')(app)
const Noodle = db.model('noodle')

import enzyme, {mount} from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'
import * as rrd from 'react-router-dom'
const {MemoryRouter} = rrd

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Noodle routes', () => {
  const noodles = [
    {
      name: 'Spicy Beef Noodle Soup',
      noodleType: 'hand-pulled',
      imageUrl: '',
      description: 'Beef with Noodle with Soup',
      price: 999,
      quantity: 1,
      isCustom: false
    },
    {
      name: 'Chicken Noodle Soup',
      noodleType: 'hand-pulled',
      imageUrl: '',
      description: 'Chicken with Noodle with Soup',
      price: 999,
      quantity: 1,
      isCustom: false
    }
  ]
  let storedNoodles
  beforeEach(async () => {
    const createdNoodles = await Noodle.bulkCreate(noodles)
    storedNoodles = createdNoodles.map(noodle => noodle.dataValues)
  })

  describe('Get `/api/noodles`', () => {
    it('serves up all noodles', async () => {
      const response = await agent.get('/api/noodles').expect(200)
      expect(response.body).to.have.length(8)
      expect(response.body[0].name).to.equal(storedNoodles[0].name)
    })
  })
})
