const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  instructions: {
    type: Sequelize.TEXT
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  status: {
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
