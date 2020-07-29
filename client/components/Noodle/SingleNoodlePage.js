import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleNoodle} from '../../store/noodles'
import {addToCart} from '../../store/cart'
import UpdateNoodle from './UpdateNoodle'

export class SingleNoodle extends Component {
  constructor() {
    super()
    this.state = {
      showUpdateNoodle: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    const id = this.props.match.params.noodleId
    this.props.getSingleNoodle(id)
  }

  handleClick(event) {
    if (event.target.name === 'updateNoodle') {
      this.setState({
        showUpdateNoodle: !this.state.showUpdateNoodle
      })
    }
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
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.props.addToCart(this.props.noodle, cart)}
              >
                Add To Cart
              </button>
              <button
                type="button"
                className="btn btn-primary"
                name="updateNoodle"
                onClick={event => this.handleClick(event)}
              >
                Update Noodle
              </button>
            </div>
            {this.state.showUpdateNoodle ? (
              <UpdateNoodle id={noodle.id} />
            ) : null}
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
  addToCart: (noodle, cart) => dispatch(addToCart(noodle, cart))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleNoodle)
