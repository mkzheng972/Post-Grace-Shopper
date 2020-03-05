import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart, countChange} from '../store/cart'

class CartItem extends React.Component {
  constructor() {
    super()

    this.state = {
      quantity: 1
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    //thunk countchange
    this.props.countChange(
      event.target.value,
      this.props.cart.id,
      this.props.noodle.id
    )
  }

  render() {
    const {noodle, removeFromCart, countChange, cart} = this.props
    const {id, name, price, imageUrl, total} = noodle
    return (
      <div className="row my-1 text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img style={{width: '50px', height: '50px'}} src={imageUrl} />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>{name}</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>{price}</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <input
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
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
        <div className="col-10 mx-auto col-lg-2">{total}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  removeFromCart: (noodle, id) => dispatch(removeFromCart(noodle, id)),
  countChange: (quantity, cartId, noodleId) =>
    dispatch(countChange(quantity, cartId, noodleId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
