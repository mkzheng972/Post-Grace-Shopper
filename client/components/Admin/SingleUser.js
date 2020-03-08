import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleUser} from '../../store/user'

export class SingleUser extends Component {
  componentDidMount() {
    const id = this.props.match.params.userId
    this.props.getSingleUser(id)
  }
  render() {
    const {email, firstName, lastName, imageUrl} = this.props.user
    return (
      <div>
        <h1>{email}</h1>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        <img src={imageUrl} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  getSingleUser: id => dispatch(getSingleUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser)
