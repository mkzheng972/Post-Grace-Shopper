import React from 'react'
import {connect} from 'react-redux'
import {checkout} from '../../store/cart'
import Checkouts from '../../../react-express-stripe/frontend/Checkout'
import Swal from 'sweetalert2'

function Checkout(props) {
  const {cart, checkout} = props
  const handleClick = () => {
    checkout(cart)
    Swal.fire({
      icon: 'success',
      title: 'Order Confirmation',
      text: 'Thank you for ordering!'
    })
  }
  return (
    <div className="checkout-buttons">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleClick()}
      >
        Pay with Cash
      </button>
      <Checkouts
        cart={props.cart}
        checkout={props.checkout}
        handleClick={handleClick}
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
