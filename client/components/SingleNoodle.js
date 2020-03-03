import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleNoodle} from '../store/noodles'

export class SingleNoodle extends Component {
  componentDidMount() {
    const id = this.props.match.params.noodleId
    this.props.getSingleNoodle(id)
  }

  render() {
    const {name, imageUrl, description, price} = this.props.noodle
    return (
      <div>
        <h1>{name}</h1>
        <img src={imageUrl} />
        <h3>{description}</h3>
        <h3>{`$${price}`}</h3>
        <button className="addNoodle" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  noodle: state.noodle
})

const mapDispatchToProps = dispatch => ({
  getSingleNoodle: id => dispatch(getSingleNoodle(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleNoodle)
