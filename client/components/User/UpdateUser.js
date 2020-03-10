import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateUser, getSingleUser} from '../../store/user'

export class UpdateUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      password: this.props.user.password
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    await this.props.updateUser(this.state, this.props.user.id)
    this.setState({
      firstName: '',
      lastName: '',
      password: ''
    })
    await this.props.getSingleUser(this.props.user.id)
  }

  render() {
    return (
      <div className="updateUser">
        <form onSubmit={this.handleSubmit}>
          <h4>Change Name Below</h4>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="same as old password"
            />
          </label>
          <button type="submit">Submit Change</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  getSingleUser: id => dispatch(getSingleUser(id)),
  updateUser: (user, id) => dispatch(updateUser(user, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser)
