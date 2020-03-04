import React from 'react'
import {connect} from 'react-redux'
import {checkout} from '../store/cart'

function Checkout(props) {
  return (
    <div>
      <button type="button" onClick={() => props.checkout(props.cart)}>
        Pay
      </button>
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
