import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartColumns from './CartColumns'

export class Cart extends Component {
  render() {
    return (
      <div>
        <h3>inCart</h3>
        {this.props.cart.length ? (
          <CartColumns />
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
