import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCart} from '../../store/cart'

/**
 * COMPONENT
 */
export class UserHome extends React.Component {
  componentDidMount() {
    // console.log('userprops', this.props.user)
    // this.props.getCart(this.props.user.id)
  }
  render() {
    // console.log('render-userhome', this.props)
    const {email, firstName} = this.props
    return (
      <div>
        <h2>Welcome back {firstName}!</h2>
        <h3>Welcome, {email}</h3>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    user: state.user
  }
}

const mapDispatch = dispatch => ({
  getCart: id => dispatch(getCart(id))
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
