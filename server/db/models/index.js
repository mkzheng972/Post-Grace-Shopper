const User = require('./user')
const Order = require('./order')
const Noodle = require('./noodle')
const Ingredient = require('./ingredient')
const OrderItem = require('./orderItem')

// one to many
Order.belongsTo(User)
User.hasMany(Order)

// many to many
Order.belongsToMany(Noodle, {through: OrderItem})
Noodle.belongsToMany(Order, {through: OrderItem})

// many to many
Noodle.belongsToMany(Ingredient, {through: 'noodleIngredient'})
Ingredient.belongsToMany(Noodle, {through: 'noodleIngredient'})

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Order,
  Noodle,
  Ingredient,
  OrderItem
}
