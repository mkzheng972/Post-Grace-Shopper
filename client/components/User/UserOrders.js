import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOrders} from '../../store/orders'

export class UserOrders extends Component {
  componentDidMount() {
    const {user} = this.props
    this.props.getOrders(user.id)
  }

  render() {
    const {orders} = this.props ? this.props : []

    return (
      <div className="container">
        <h2>Order History</h2>
        {orders ? (
          orders.map(order => (
            <div key={order.id}>
              <h4>Order Number: {order.id}</h4>
              <p>Status: {order.status}</p>
              <p>
                Instructions:{' '}
                {order.instructions
                  ? order.instructions
                  : 'No Instructions Provided'}
              </p>
              {/* <p>Order Date: {order.date}</p> */}
              <p>Order Date: {order.createdAt.slice(0, 10)}</p>
              {/* Order Items...Need to eager load */}
              {order.noodles.map(noodle => (
                <div key={noodle.id}>
                  <p>Noodle: {noodle.name}</p>
                  <p>Noodle Type: {noodle.noodleType}</p>
                  <p>Quantity: {noodle.quantity}</p>
                  <p>Price: ${noodle.price / 100}</p>
                </div>
              ))}
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
