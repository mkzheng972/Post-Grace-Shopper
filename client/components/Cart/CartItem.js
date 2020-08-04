import React from 'react'
import {connect} from 'react-redux'
import {
  removeFromCart,
  countChange,
  decreaseItemQuantity,
  increaseItemQuantity
} from '../../store/cart'

class CartItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quantity: 1
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    //thunk countchange
    // this.props.countChange(
    //   event.target.value,
    //   this.props.cart.id,
    //   this.props.noodle.id
    // )
    // if (event.target.value == 0) {
    //   this.props.removeFromCart(this.props.noodle, this.props.cart.id)
    // }
  }

  render() {
    const {
      noodle,
      cart,
      removeFromCart,
      decreaseItemQuantity,
      increaseItemQuantity
    } = this.props
    const {name, price, imageUrl, quantity} = noodle
    return (
      <div className="row my-1 text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img style={{width: '50px', height: '50px'}} src={imageUrl} />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>{name}</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>$ {price / 100}</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="quantity">
            <span
              className="arrow"
              onClick={() => decreaseItemQuantity(noodle, cart)}
            >
              &#10094;
            </span>
            <span className="quantity-value">{quantity}</span>
            <span
              className="arrow"
              onClick={() => increaseItemQuantity(noodle, cart)}
            >
              &#10095;
            </span>
          </span>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <button
            onClick={() => removeFromCart(noodle, cart.id)}
            type="button"
            className="btn btn-danger"
          >
            {' '}
            X{' '}
          </button>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          $ {(price * this.state.quantity) / 100}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  removeFromCart: (noodle, cartId) => dispatch(removeFromCart(noodle, cartId)),
  decreaseItemQuantity: (noodle, cart) =>
    dispatch(decreaseItemQuantity(noodle, cart)),
  increaseItemQuantity: (noodle, cart) =>
    dispatch(increaseItemQuantity(noodle, cart))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
