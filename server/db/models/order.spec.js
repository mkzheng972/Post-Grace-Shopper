/* global describe beforeEach it */
/*
const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order model', () => {
  describe('Validations', () => {
    it('requires `status`', async () => {
      const order = Order.build()

      try {
        await order.validate()
        throw Error('status cannot be null')
      } catch (err) {
        expect(err.message).to.contain('status cannot be null')
      }
    })

    it('requires `status` to not be an empty', async () => {
      const order = Order.build({
        status: ''
      })

      try {
        await order.validate()
        throw Error('Validation error')
      } catch (err) {
        expect(err.message).to.contain('Validation error')
      }
    })

    it('requires `status` property to be either `pending` or `completed`', async () => {
      const order = Order.build({})

      await order.save()
      order.status = 'pending'
      await order.save()
      order.status = 'completed'
      await order.save()

      try {
        order.status = 'done'
        await order.save()
      } catch (err) {
        expect(err).to.exist
        expect(err.message).to.contain('status')
        return
      }
      throw Error(
        'Trying to `save` a order with invalid `status` should have failed.'
      )
    })
  })
})
*/
