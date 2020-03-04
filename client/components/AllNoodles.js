import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllNoodles} from '../store/noodles'
import {Link} from 'react-router-dom'
import {deleteNoodle} from '../store/noodles'
import AddNoodle, {addNoodle} from './AddNoodle'

export class AllNoodles extends Component {
  constructor() {
    super()
    this.state = {
      showNoodle: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.getAllNoodles()
  }

  handleClick() {
    this.setState({
      showNoodle: !this.state.showNoodle
    })
  }

  render() {
    const {noodles, user} = this.props
    console.log(this.state)
    return (
      <div>
        <div>
          {!this.state.showNoodle ? (
            <button
              type="button"
              className="addNoodle"
              onClick={this.handleClick}
            >
              Add Noodle
            </button>
          ) : null}
          {this.state.showNoodle ? <AddNoodle /> : null}
        </div>
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
                <button
                  type="button"
                  className="editNoodle"
                  onClick={() => this.props.editNoodle(this.props.noodle)}
                >
                  Edit Noodle
                </button>
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
  deleteNoodle: id => dispatch(deleteNoodle(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllNoodles)
