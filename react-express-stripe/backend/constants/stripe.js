const configureStripe = require('stripe')
const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === 'production'
    ? 'sk_test_lr0jI9wgFlYtOvgtOWGNoJIX00j6vt975o'
    : 'sk_test_lr0jI9wgFlYtOvgtOWGNoJIX00j6vt975o'
const stripe = configureStripe(STRIPE_SECRET_KEY)
module.exports = stripe
