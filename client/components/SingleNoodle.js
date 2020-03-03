import React, {Component} from 'react'
import {connect} from 'react-redux'

export class SingleNoodle extends Component {
  render() {
    return <div />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SingleNoodle)
