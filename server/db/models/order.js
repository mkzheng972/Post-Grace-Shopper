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
  },
  // subTotal: Sequelize.FLOAT,
  // tax: Sequelize.FLOAT,
  total: Sequelize.INTEGER
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
