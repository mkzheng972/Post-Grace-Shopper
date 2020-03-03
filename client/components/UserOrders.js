import React, {Component} from 'react'
import {connect} from 'react-redux'

export class UserOrders extends Component {
  render() {
    return (
      <div>
        <h2>Your Orders</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders)
