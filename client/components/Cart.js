import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartColumns from './CartColumns'
import CartList from './CartList'

export class Cart extends Component {
  render() {
    const {cart} = this.props
    return (
      <div>
        {cart.length ? (
          <div>
            <CartColumns />
            <CartList cart={cart} />
          </div>
        ) : (
          <h1>Your Cart is Currently empty</h1>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
