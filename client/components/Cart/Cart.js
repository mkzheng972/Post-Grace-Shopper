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
    const total = noodles
      ? noodles.reduce(
          (accum, noodle) => accum + noodle.price * noodle.quantity,
          0
        )
      : 0
    return (
      <div className="container cart">
        {noodles.length ? (
          <div>
            <CartColumns />
            <CartList noodles={noodles} />
            <div className="total-checkout">
              <div>
                <div className="total-price">{`Total: $ ${
                  total ? total / 100 : 0
                }`}</div>
                {user.id ? (
                  <Checkout />
                ) : (
                  <div>
                    <Link to="/login" className="btn btn-outline-primary">
                      Login In to Checkout
                    </Link>
                    <Link to="/signup" className="btn btn-outline-primary">
                      Sign Up to Checkout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <h1>Your cart is currently empty</h1>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  cart: state.cart
})

export default connect(mapStateToProps)(Cart)
