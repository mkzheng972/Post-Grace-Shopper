import axios from 'axios'

const GOT_CART = 'GOT_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const COUNT_CHANGE = 'COUNT_CHANGE'
const CHECKEDOUT = 'CHECKEDOUT'
const REMOVE_CART = 'REMOVE_CART'

export const removeCart = () => ({
  type: REMOVE_CART
})

export const gotCart = cart => ({
  type: GOT_CART,
  cart
})

const checkedOut = cart => ({
  type: CHECKEDOUT,
  cart
})

export const addedToCart = noodle => {
  return {
    type: ADD_TO_CART,
    noodle
  }
}

export const removedFromCart = id => ({
  type: REMOVE_FROM_CART,
  id
})

export const countedChange = (id, count) => ({
  type: COUNT_CHANGE,
  id,
  count
})

export const removeFromCart = (noodle, cartId) => {
  return async dispatch => {
    try {
      if (cartId) {
        await axios.delete(`/api/orders/${cartId}/${noodle.id}`)
        dispatch(removedFromCart(noodle.id))
      } else {
        const localCartNoodles = JSON.parse(localStorage.getItem('noodles'))
        const newCartNoodles = localCartNoodles.filter(
          cartNoodle => cartNoodle.id !== noodle.id
        )
        localStorage.setItem('noodles', JSON.stringify(newCartNoodles))
        dispatch(removedFromCart(noodle.id))
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export const checkout = cart => {
  delete cart.noodles
  cart.status = 'completed'
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/orders`, cart)
      dispatch(checkedOut(data))
    } catch (error) {
      console.error('Error Checking Out', error)
    }
  }
}

export const addToCart = (noodle, cartId) => {
  return async dispatch => {
    try {
      if (cartId) {
        const {data} = await axios.put(`/api/orders/${cartId}`, noodle)
        if (data) dispatch(addedToCart(data))
      } else {
        const localCartNoodles = JSON.parse(localStorage.getItem('noodles'))
        localCartNoodles.push(noodle)
        localStorage.setItem('noodles', JSON.stringify(localCartNoodles))
        dispatch(addedToCart(noodle))
      }
    } catch (error) {
      console.error('failed', error)
    }
  }
}

export const getCart = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/orders/pending/${id}`)
      if (data) {
        const localCartNoodles = JSON.parse(localStorage.getItem('noodles'))
        dispatch(gotCart(data))
        if (localCartNoodles.length) {
          const serverCartNoodlesIds = data.noodles.map(noodle => noodle.id)
          localCartNoodles.forEach(noodle => {
            if (!serverCartNoodlesIds.includes(noodle.id)) {
              dispatch(addToCart(noodle, data.id))
            }
          })
          localStorage.setItem('noodles', JSON.stringify([]))
        } else {
          dispatch(gotCart(data))
          localStorage.setItem('noodles', JSON.stringify([]))
        }
      }
    } catch (error) {
      console.error('Error Getting Cart', error)
    }
  }
}

export const countChange = (quantity, cartId, noodleId) => {
  return async dispatch => {
    try {
      await axios.put(`/api/orderItems/${cartId}/${noodleId}/${quantity}`)
      dispatch(countedChange())
    } catch (error) {
      console.error('Error Changing Quantity', error)
    }
  }
}

const defaultCart = {noodles: []}

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
      return action.cart
    case COUNT_CHANGE:
      return state
    case REMOVE_CART:
      return defaultCart
    default:
      return state
  }
}
