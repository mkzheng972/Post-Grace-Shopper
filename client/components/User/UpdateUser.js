import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateUser, getSingleUser} from '../../store/user'

export class UpdateUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      password: this.props.user.password,
      imageUrl: ''
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
    await this.props.getSingleUser(this.props.user.id)
    this.setState({
      firstName: '',
      lastName: '',
      password: '',
      imageUrl: ''
    })
  }

  render() {
    return (
      <div className="updateUser">
        <form onSubmit={this.handleSubmit}>
          <h4>Change Name Below</h4>
          <label>
            New First Name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            New Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            New Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="same as old password"
            />
          </label>
          <br />
          <label>
            New Image:
            <input
              type="text"
              name="imageUrl"
              value={this.state.imageUrl}
              onChange={this.handleChange}
            />
          </label>
          <br />
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
