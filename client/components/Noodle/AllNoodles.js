import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllNoodles, deleteNoodle, updateNoodle} from '../../store/noodles'
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
    // console.log(event.target.name)
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
  }

  render() {
    const {noodles, user} = this.props
    return (
      <div className="container">
        {user.isAdmin ? (
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
        ) : (
          <div />
        )}
        <div className="row">
          {noodles.map(noodle => (
            <div className="d-flex p-2 bd-highlight col-6" key={noodle.id}>
              <img
                className="img-fluid img-thumbnail"
                width="150"
                heigth="150"
                src={noodle.imageUrl}
              />
              <div className="d-flex flex-column bd-highlight mb-3 ">
                <ul className="list-group">
                  <Link to={`/noodles/${noodle.id}`}>
                    <li className="text-center list-group-item active">
                      {noodle.name}
                    </li>
                  </Link>
                  <li className="list-group-item">{noodle.description}</li>
                  <li className="list-group-item">$ {noodle.price / 100}</li>
                </ul>
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
              ) : (
                <div />
              )}
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
  updateNoodle: (noodle, id) => dispatch(updateNoodle(noodle, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllNoodles)
