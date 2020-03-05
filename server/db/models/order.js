const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  instructions: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM('pending', 'completed'),
    defaultValue: 'pending',
    allowNull: false
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
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
