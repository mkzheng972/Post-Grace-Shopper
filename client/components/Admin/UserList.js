import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllUsers} from '../../store/user'
export class UserList extends Component {
  componentDidMount() {
    this.props.getAllUsers()
  }
  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <div className="single-user" key={user.id}>
            <Link to={`/users/${user.id}`}>
              <h1>{user.email}</h1>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
