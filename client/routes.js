import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import Cart from './components/Cart/Cart'
import AllNoodles from './components/Noodle/AllNoodles'
import SingleNoodle from './components/Noodle/SingleNoodlePage'
import UserSettings from './components/User/UserSettings'
import UserOrders from './components/User/UserOrders'
import OrderConfirmation from './components/Cart/OrderConfirmation'
import UserProfile from './components/User/UserProfile'
import UserList from './components/Admin/UserList'
import SingleUser from './components/Admin/SingleUser'

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
        <Route path="/home" component={UserHome} />
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
            <Route path="/admin/userList" component={UserList} />
            <Route path="/users/:userId" component={SingleUser} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route exact path="/">
          <Redirect to="home" />
        </Route>
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
