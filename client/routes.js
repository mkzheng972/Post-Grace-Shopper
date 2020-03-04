import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import Cart from './components/Cart'
import AllNoodles from './components/AllNoodles'
import SingleNoodle from './components/SingleNoodle'
import UserSettings from './components/UserSettings'
import UserOrders from './components/UserOrders'
import OrderConfirmation from './components/OrderConfirmation'
import UserProfile from './components/UserProfile'
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/menu" component={AllNoodles} />
        <Route path="/noodles/:noodleId" component={SingleNoodle} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route
              path="/user/orders/confirmation"
              component={OrderConfirmation}
            />
            <Route path="/user/profile" component={UserProfile} />
            <Route path="/user/orders" component={UserOrders} />
            <Route path="/user/settings" component={UserSettings} />
            <Route path="/home" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => ({
  loadInitialData() {
    dispatch(me())
  }
})

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
