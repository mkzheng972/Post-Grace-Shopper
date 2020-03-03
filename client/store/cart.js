import axios from 'axios'
import Axios from 'axios'

const GOT_CART = 'GOT_CART'
const ADD_TO_CART = 'ADD_TO_CART'

const gotCart = cart => ({
  type: GOT_CART,
  cart
})

export const getCart = id => {
  return async dispatch => {
    try {
      const {data} = await Axios.get(`/api/orders/${id}`)
      if (data) dispatch(gotCart(data))
    } catch (error) {
      console.log('no cart', error)
    }
  }
}

export const addToCart = noodle => ({
  type: ADD_TO_CART,
  noodle
})

export default function(state = [], action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case ADD_TO_CART:
      return [...state, action.noodle]
    default:
      return state
  }
}
