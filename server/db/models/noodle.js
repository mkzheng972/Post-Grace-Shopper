const Sequelize = require('sequelize')
const db = require('../db')

const Noodle = db.define('noodle', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  noodleType: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://www.washingtonpost.com/news/voraciously/wp-content/uploads/sites/68/2020/01/v-rr-lunarnewyear_01_leadweb.jpg'
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 0
    }
  },
  isCustom: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  isVeggie: {
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
