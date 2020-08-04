import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  getAllNoodles,
  deleteNoodle,
  updateNoodle,
  sortNoodles
} from '../../store/noodles'
import AddNoodle from './AddNoodle'
import SingleNoodleItem from './SingleNoodleItem'
import {addToCart} from '../../store/cart'
import {SortNoodle} from './SortNoodle'
import {me} from '../../store/user'

export class AllNoodles extends Component {
  constructor() {
    super()
    this.state = {
      showAddNoodle: false,
      showUpdateNoodle: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.getAllNoodles()
    this.props.getSelfUser()
  }

  handleClick(event) {
    if (event.target.name === 'addNoodle') {
      this.setState({
        showAddNoodle: !this.state.showAddNoodle
      })
    } else if (event.target.name === 'soup') {
      this.setState({
        noodles: this.props.sortNoodles('soup')
      })
    } else if (event.target.name === 'dry') {
      this.setState({
        noodles: this.props.sortNoodles('dry')
      })
    } else if (event.target.name === 'veggie') {
      this.setState({
        noodles: this.props.sortNoodles('veggie')
      })
    } else {
      this.setState({
        noodles: this.props.getAllNoodles()
      })
    }
  }

  render() {
    const {noodles, user, deleteNoodle, addToCart, cart} = this.props
    const addNoodleButton = user.isAdmin ? (
      <div className="add-noodle-button">
        <button
          type="button"
          className="btn btn-primary"
          name="addNoodle"
          onClick={this.handleClick}
        >
          Add Noodle
        </button>
        {this.state.showAddNoodle ? <AddNoodle /> : null}
      </div>
    ) : null

    return (
      <div className="container">
        <SortNoodle handleSortNoodle={this.handleClick} />
        {/* Noodles below */}
        {addNoodleButton}
        <div className="row" id="all-noodles">
          {noodles.map(noodle => (
            <SingleNoodleItem
              key={noodle.id}
              noodle={noodle}
              user={user}
              deleteNoodle={deleteNoodle}
              addToCart={addToCart}
              cart={cart}
            />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  noodles: state.noodles,
  user: state.user,
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  getAllNoodles: () => dispatch(getAllNoodles()),
  deleteNoodle: id => dispatch(deleteNoodle(id)),
  updateNoodle: (noodle, id) => dispatch(updateNoodle(noodle, id)),
  sortNoodles: type => dispatch(sortNoodles(type)),
  addToCart: (noodle, cart) => dispatch(addToCart(noodle, cart)),
  getSelfUser: () => dispatch(me())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllNoodles)
