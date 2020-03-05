import axios from 'axios'

const GOT_CART = 'GOT_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const COUNT_CHANGE = 'COUNT_CHANGE'
const CHECKEDOUT = 'CHECKEDOUT'

const gotCart = cart => ({
  type: GOT_CART,
  cart
})

const checkedOut = () => ({
  type: CHECKEDOUT
})

export const addedToCart = noodle => {
  return {
    type: ADD_TO_CART,
    noodle
  }
}

export const checkout = cart => {
  console.log(cart)
  return async dispatch => {
    try {
      await axios.post(`/api/orders`, cart)
      dispatch(checkedOut())
    } catch (error) {
      console.error('Error Checking Out', error)
    }
  }
}

export const getCart = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/orders/history/${id}`)
      if (data) dispatch(gotCart(data))
    } catch (error) {
      console.error('Error Getting Cart', error)
    }
  }
}

export const addToCart = (noodle, cartId) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/orders/${cartId}`, noodle)
      if (data) dispatch(addedToCart(data))
    } catch (error) {
      console.log('failed', error)
    }
  }
}

const defaultCart = {noodles: [], total: 0}

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  id
})

export const countChange = (id, count) => ({
  type: COUNT_CHANGE,
  id,
  count
})

export default function(state = defaultCart, action) {
  switch (action.type) {
    case GOT_CART:
      return action.cart
    case ADD_TO_CART:
      return {
        ...state,
        noodles: [...state.noodles, action.noodle],
        total: state.total + action.noodle.price
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        noodles: state.noodles.filter(noodle => noodle.id !== action.id)
      }
    case CHECKEDOUT:
      return defaultCart
    // case COUNT_CHANGE:
    // 	return state.map((noodle) => {
    // 		if (noodle.id === action.id) noodle.count = action.count;
    // 		return noodle;
    // 	});
    default:
      return state
  }
}
