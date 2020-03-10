import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleNoodle} from '../../store/noodles'
import {addToCart} from '../../store/cart'

export class SingleNoodle extends Component {
  componentDidMount() {
    const id = this.props.match.params.noodleId
    this.props.getSingleNoodle(id)
  }

  render() {
    const {noodle, cart} = this.props
    const {name, imageUrl, description, price, id} = noodle
    const show = cart.noodles.filter(nood => nood.id === id)
    return (
      <div>
        <h1>{name}</h1>
        <img src={imageUrl} />
        <h3>{description}</h3>
        <h3>{`$${price / 100}`}</h3>
        {show.length > 0 ? (
          <button type="button">Already in Cart</button>
        ) : (
          <button
            type="button"
            className="addToCart"
            onClick={() => this.props.addToCart(this.props.noodle, cart.id)}
          >
            Add To Cart
          </button>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  noodle: state.noodle,
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  getSingleNoodle: id => dispatch(getSingleNoodle(id)),
  addToCart: (noodle, id) => dispatch(addToCart(noodle, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleNoodle)
