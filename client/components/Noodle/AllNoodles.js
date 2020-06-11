import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  getAllNoodles,
  deleteNoodle,
  updateNoodle,
  sortNoodles
} from '../../store/noodles'
import {Link} from 'react-router-dom'
import AddNoodle from './AddNoodle'
import UpdateNoodle from './UpdateNoodle'

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
  }

  handleClick(event) {
    if (event.target.name === 'addNoodle') {
      this.setState({
        showAddNoodle: !this.state.showAddNoodle
      })
    } else if (event.target.name === 'updateNoodle') {
      this.setState({
        showUpdateNoodle: !this.state.showUpdateNoodle
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
    const {noodles, user} = this.props

    const userAdmin = user.isAdmin ? (
      <div>
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
        <div className="card text-center">
          <h4>Filter By Noodle Type</h4>
          <div className="sort-products">
            <button
              type="button"
              className="btn btn-warning"
              name="soup"
              onClick={this.handleClick}
            >
              Soup Noodles
            </button>
            <button
              type="button"
              className="btn btn-warning"
              name="dry"
              onClick={this.handleClick}
            >
              Dry Noodles
            </button>
            <button
              type="button"
              className="btn btn-warning"
              name="veggie"
              onClick={this.handleClick}
            >
              Veggie Noodles
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              name="all"
              onClick={this.handleClick}
            >
              No Filter
            </button>
          </div>
        </div>
        {userAdmin}
        <div className="row" id="all-noodles">
          {noodles.map(noodle => (
            <div
              className="card text-center"
              style={{width: '20rem', height: '30rem', margin: '10px'}}
              key={noodle.id}
            >
              <Link to={`/noodles/${noodle.id}`}>
                <img
                  className="card-img-top img-fluid"
                  style={{height: '300px'}}
                  src={noodle.imageUrl}
                />
              </Link>
              <div className="card-content">
                <Link to={`/noodles/${noodle.id}`}>
                  <h4 className="card-title">{noodle.name}</h4>
                </Link>
                <p className="card-text">{noodle.description}</p>
                <p className="card-text">Type: {noodle.noodleType}</p>
                <p className="card-text">${noodle.price / 100}</p>
              </div>
              {user.isAdmin ? (
                <div display="card text-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    name="updateNoodle"
                    onClick={this.handleClick}
                  >
                    Update Noodle
                  </button>
                  {this.state.showUpdateNoodle ? (
                    <UpdateNoodle id={noodle.id} />
                  ) : null}
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => this.props.deleteNoodle(noodle.id)}
                  >
                    Remove Noodle
                  </button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  noodles: state.noodles,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  getAllNoodles: () => dispatch(getAllNoodles()),
  deleteNoodle: id => dispatch(deleteNoodle(id)),
  updateNoodle: (noodle, id) => dispatch(updateNoodle(noodle, id)),
  sortNoodles: type => dispatch(sortNoodles(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllNoodles)
