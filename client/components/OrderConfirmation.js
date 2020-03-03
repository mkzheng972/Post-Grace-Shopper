import React, {Component} from 'react'
import {connect} from 'react-redux'

export class OrderConfirmation extends Component {
  render() {
    return (
      <div>
        <h2>Order Confirmation</h2>
        <p>Thank you for your order!</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmation)
