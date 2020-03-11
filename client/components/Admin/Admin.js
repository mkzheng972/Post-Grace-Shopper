import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllUsers} from '../../store/user'
import {Link} from 'react-router-dom'

export class Admin extends Component {
  componentDidMount() {
    this.props.getAllUsers()
  }
  render() {
    return (
      <Link to="/admin/userList">
        <p>Admin Page User List</p>
      </Link>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
