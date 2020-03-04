import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addNoodle} from '../store/noodles'

export default class AddNoodle extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      imageUrl: '',
      description: '',
      price: 0
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addNoodle(this.state)
    this.setState({
      name: '',
      imageUrl: '',
      description: '',
      price: 0
    })
  }
  render() {
    return (
      <div className="addNoodle">
        <form onSubmit={this.handleSubmit}>
          <label>
            Noodle Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Image:
            <input
              type="text"
              name="imageUrl"
              value={this.state.imageUrl}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="imageUrl"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add Noodle</button>
        </form>
      </div>
    )
  }
}
