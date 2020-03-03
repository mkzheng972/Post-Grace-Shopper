import React, {Component} from 'react'
import {connect} from 'react-redux'

export class UserSettings extends Component {
  render() {
    return (
      <div>
        <h2>Your Settings</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings)
