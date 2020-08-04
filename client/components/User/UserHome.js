import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export class UserHome extends React.Component {
  render() {
    const {email, firstName} = this.props
    return (
      <div className="homepage">
        <div className="homepage-text">
          <h2>
            Welcome {firstName ? `Back` : null} To Spicy Noods
            {firstName ? `, ${firstName}` : null}!
          </h2>
          <p>We have all kinds of noodles for your liking!</p>
        </div>
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

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
