import axios from 'axios'

const GOT_ORDERS = 'GOT_ORDERS'

const gotOrders = orders => ({
  type: GOT_ORDERS,
  orders
})

export const getOrders = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/users/history/${id}`)
      dispatch(gotOrders(data))
    } catch (error) {
      console.error('Error getting Orders', error)
    }
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case GOT_ORDERS:
      return action.orders
    default:
      return state
  }
}
