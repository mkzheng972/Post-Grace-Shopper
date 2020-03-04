import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOrders} from '../store/orders'

export class UserOrders extends Component {
  componentDidMount() {
    const {user} = this.props
    this.props.getOrders(user.id)
  }

  render() {
    // console.log("Order History", this.props)
    const {orders} = this.props ? this.props : []
    // const {orders} = []
    console.log('orders', orders)

    return (
      <div>
        {orders ? (
          orders.map(order => (
            <div key={order.id}>
              <h2>Order History</h2>
              <p>Order Number: {order.id}</p>
              <p>Instructions: {order.instructions}</p>
              <p>Order Date: {order.date}</p>
              {/* Order Items...Need to eager load */}
            </div>
          ))
        ) : (
          <h2>No Order History</h2>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  orders: state.orders
})

const mapDispatchToProps = dispatch => ({
  getOrders: id => dispatch(getOrders(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders)
