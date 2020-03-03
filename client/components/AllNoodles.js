import React, {Component} from 'react'
import {connect} from 'react-redux'

export class AllNoodles extends Component {
  render() {
    return (
      <div>
        <h2>Testing All Noodles</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AllNoodles)
