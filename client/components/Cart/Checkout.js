import React from 'react'
import {connect} from 'react-redux'
import {checkout} from '../../store/cart'
import Checkouts from '../../../react-express-stripe/frontend/Checkout'
import Swal from 'sweetalert2'

function Checkout(props) {
  const {cart, checkout} = props
  const handleCheckout = () => {
    checkout(cart)
    Swal.fire({
      icon: 'success',
      title: `Order Confirmation #${cart.id}`,
      text: 'Thank you for ordering!'
    })
  }
  return (
    <div className="checkout-buttons">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleCheckout()}
      >
        Pay with Cash
      </button>
      <Checkouts
        cart={props.cart}
        checkout={props.checkout}
        handleCheckout={handleCheckout}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  checkout: cart => dispatch(checkout(cart))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
