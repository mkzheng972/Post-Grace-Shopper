import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartColumns from './CartColumns'
import CartList from './CartList'
import Checkout from './Checkout'

export class Cart extends Component {
  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    const {cart} = this.props
    const {noodles} = cart
    return (
      <div>
        {noodles.length ? (
          <div>
            <CartColumns />
            <CartList noodles={noodles} />
            <Checkout />
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
