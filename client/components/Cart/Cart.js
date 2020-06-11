import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartColumns from './CartColumns'
import CartList from './CartList'
import Checkout from './Checkout'
import {Link} from 'react-router-dom'

export class Cart extends Component {
  render() {
    const {cart, user} = this.props
    const {noodles} = cart
    return (
      <div id="cart">
        {noodles.length ? (
          <div>
            <CartColumns />
            <CartList noodles={noodles} />
            <div className="float-right">
              {user.id ? (
                <Checkout />
              ) : (
                <Link to="/signup" className="btn btn-outline-primary">
                  Sign Up to Checkout
                </Link>
              )}
            </div>
          </div>
        ) : (
          <h1>Your Cart is Currently empty</h1>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  cart: state.cart
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
