import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllNoodles, deleteNoodle, updateNoodle} from '../store/noodles'
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
      <div>
        {user.isAdmin ? (
          <div>
            <button
              type="button"
              className="addNoodle"
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
        {noodles.map(noodle => (
          <div key={noodle.id}>
            <Link to={`/noodles/${noodle.id}`}>
              <h4>{noodle.name}</h4>
            </Link>
            <img src={noodle.imageUrl} />
            <p>{noodle.description}</p>
            <p>{noodle.price}</p>
            {user.isAdmin ? (
              <div>
                <div>
                  <button
                    type="button"
                    className="updateNoodle"
                    name="updateNoodle"
                    onClick={this.handleClick}
                  >
                    Update Noodle
                  </button>
                  {this.state.showUpdateNoodle ? (
                    <UpdateNoodle id={noodle.id} />
                  ) : null}
                </div>
                {/* <button
                  type="button"
                  className="updateNoodle"
                  name="updateNoodle"
                  onClick={() => this.props.updateNoodle(noodle, noodle.id)}
                >
                  Update Noodle
                </button> */}
                <button
                  type="button"
                  className="removeNoodle"
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
