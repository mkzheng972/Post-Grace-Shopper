import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllNoodles} from '../store/noodles'
import {Link} from 'react-router-dom'
import {deleteNoodle, addNoodle} from '../store/noodles'

export class AllNoodles extends Component {
  componentDidMount() {
    this.props.getAllNoodles()
  }
  render() {
    const {noodles, user} = this.props
    return (
      <div>
        <button
          type="button"
          className="addNoodle"
          onClick={() => this.props.addNoodle(noodle)}
        >
          Add Noodle
        </button>
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
