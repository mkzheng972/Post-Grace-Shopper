import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllNoodles} from '../store/noodles'
import {Link} from 'react-router-dom'
import {me} from '../store/user'

export class AllNoodles extends Component {
  componentDidMount() {
    this.props.getAllNoodles()
    this.props.me()
  }
  render() {
    const {noodles} = this.props
    console.log(this)
    return (
      <div>
        {noodles.map(noodle => (
          <div key={noodle.id}>
            <Link to={`/noodles/${noodle.id}`}>
              <h4>{noodle.name}</h4>
            </Link>
            <img src={noodle.imageUrl} />
            <p>{noodle.description}</p>
            <p>{noodle.price}</p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  noodles: state.noodles
})

const mapDispatchToProps = dispatch => ({
  getAllNoodles: () => dispatch(getAllNoodles()),
  me: () => dispatch(me())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllNoodles)
