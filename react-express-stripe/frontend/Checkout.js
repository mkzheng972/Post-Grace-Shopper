import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import STRIPE_PUBLISHABLE from './constants/stripe'
import PAYMENT_SERVER_URL from './constants/server'
import Swal from 'sweetalert2'

const CURRENCY = 'EUR'
const fromEuroToCent = amount => amount * 100
const successPayment = (checkout, cart) => {
  checkout(cart)
  Swal.fire({
    icon: 'success',
    title: 'Order Confirmation',
    text: 'Thank you for ordering!'
  })
}
const errorPayment = data => {
  alert('Payment Error')
}
const onToken = (amount, description, cart, checkout) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment(checkout, cart))
    .catch(errorPayment)
const Checkout = ({name, description, amount, cart, checkout}) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description, cart, checkout)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
)
export default Checkout
