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
      <div id="single-noodle" className="container center">
        <div
          className="card text-center"
          display="inline"
          text-align="center"
          style={{margin: '10px'}}
        >
          <div>
            <img width="300px" height="300px" src={imageUrl} />
            <div>
              <h1>{name}</h1>
              <h3>{description}</h3>
              <h3>{`$${price / 100}`}</h3>
              {/* {show.length > 0 ? (
                <button className="btn btn-outline-primary" type="button">
                  Already in Cart
                </button>
              ) : ( */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.props.addToCart(this.props.noodle, cart.id)}
              >
                Add To Cart
              </button>
              {/* )} */}
            </div>
          </div>
        </div>
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
