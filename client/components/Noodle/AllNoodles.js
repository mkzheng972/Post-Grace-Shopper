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
    }
    if (event.target.name === 'updateNoodle') {
      this.setState({
        showUpdateNoodle: !this.state.showUpdateNoodle
      })
    }
    if (event.target.name === 'soup') {
      this.setState({
        noodles: this.props.sortNoodles('soup')
      })
    }
    if (event.target.name === 'dry') {
      this.setState({
        noodles: this.props.sortNoodles('dry')
      })
    }
    if (event.target.name === 'veggie') {
      this.setState({
        noodles: this.props.sortNoodles('veggie')
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
            <button type="button" name="soup" onClick={this.handleClick}>
              Soup Noodles
            </button>
            <button type="button" name="dry" onClick={this.handleClick}>
              Dry Noodles
            </button>
            <button type="button" name="veggie" onClick={this.handleClick}>
              Veggie Noodles
            </button>
          </div>
        </div>

        {userAdmin}
        <div className="row">
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
                <div>
                  <div>
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
                  </div>

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
