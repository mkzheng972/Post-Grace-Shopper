const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  instructions: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATEONLY
  }
})

module.exports = Order

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
