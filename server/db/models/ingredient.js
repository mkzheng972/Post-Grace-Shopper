const Sequelize = require('sequelize')
const db = require('../db')

const Ingredient = db.define('ingredients', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  isVeggie: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Ingredient
