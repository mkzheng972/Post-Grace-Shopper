import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateNoodle} from '../../store/noodles'

export class UpdateNoodle extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      imageUrl: '',
      description: '',
      price: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.updateNoodle(this.state, this.props.id)
    this.setState({
      name: '',
      imageUrl: '',
      description: '',
      price: ''
    })
  }

  render() {
    return (
      <div className="updateNoodle">
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
          <br />
          <label>
            Image:
            <input
              type="text"
              name="imageUrl"
              value={this.state.imageUrl}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit" className="btn btn-secondary">
            Submit Noodle
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  noodle: state.noodle
})

const mapDispatchToProps = dispatch => ({
  updateNoodle: (noodle, id) => dispatch(updateNoodle(noodle, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateNoodle)
