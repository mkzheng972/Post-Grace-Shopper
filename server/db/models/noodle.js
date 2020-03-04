const Sequelize = require('sequelize')
const db = require('../db')

const Noodle = db.define('noodle', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  noodleType: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  isCustom: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Noodle

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
