import axios from 'axios'
import {decreaseItemQuantityUtil, increaseItemQuantityUtil} from './cart.util'

const GOT_CART = 'GOT_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CHECKEDOUT = 'CHECKEDOUT'
const REMOVE_CART = 'REMOVE_CART'
const DECREASE_ITEM_QUANTITY = 'DECREASE_ITEM_QUANTITY'
const INCREASE_ITEM_QUANTITY = 'INCREASE_ITEM_QUANTITY'

export const removeCart = () => ({
  type: REMOVE_CART
})

export const gotCart = cart => ({
  type: GOT_CART,
  cart
})

export const checkedOut = cart => ({
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

export const decreasedItemQuantity = (noodle, cart) => {
  return {
    type: DECREASE_ITEM_QUANTITY,
    noodle,
    cart
  }
}

export const increasedItemQuantity = (noodleId, quantity) => {
  return {
    type: INCREASE_ITEM_QUANTITY,
    noodleId,
    quantity
  }
}

export const increaseItemQuantity = (noodle, cart) => {
  return async dispatch => {
    try {
      noodle.quantity = parseInt(noodle.quantity) + 1
      if (cart.id) {
        const {data} = await axios.put(
          `/api/orderItems/${cart.id}/${noodle.id}/${noodle.quantity}`
        )
        dispatch(increasedItemQuantity(data.noodleId, data.quantity))
      } else {
        // localstorage
        const localCartNoodles = JSON.parse(localStorage.getItem('noodles'))
        const newLocalCartNoodles = localCartNoodles.map(item => {
          if (item.id === noodle.id) {
            item.quantity = noodle.quantity
          }
          return item
        })
        localStorage.setItem('noodles', JSON.stringify(newLocalCartNoodles))
        dispatch(increasedItemQuantity(noodle.id, noodle.quantity))
      }
    } catch (error) {
      console.error('Error Increasing Item Quantity', error)
    }
  }
}

export const decreaseItemQuantity = (noodle, cart) => {
  return async dispatch => {
    try {
      noodle.quantity = parseInt(noodle.quantity) - 1
      if (noodle.quantity === 0) {
        dispatch(removeFromCart(noodle, cart.id))
      } else if (cart.id) {
        const {data} = await axios.put(
          `/api/orderItems/${cart.id}/${noodle.id}/${noodle.quantity}`
        )
        dispatch(decreasedItemQuantity(data.noodleId, data.quantity))
      } else {
        // localstorage
        const localCartNoodles = JSON.parse(localStorage.getItem('noodles'))
        const newLocalCartNoodles = localCartNoodles.map(item => {
          if (item.id === noodle.id) {
            item.quantity = noodle.quantity
          }
          return item
        })
        localStorage.setItem('noodles', JSON.stringify(newLocalCartNoodles))
        dispatch(decreasedItemQuantity(noodle.id, noodle.quantity))
      }
    } catch (error) {
      console.error('Error Increasing Item Quantity', error)
    }
  }
}

export const getCart = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/orders/pending/${id}`)
      if (data) {
        const localCartNoodles = JSON.parse(localStorage.getItem('noodles'))
        const mapQuantityNoodles = data.noodles.map(item => {
          if (item.quantity !== item.orderItem.quantity) {
            item.quantity = item.orderItem.quantity
          }
          return item
        })
        data.noodles = mapQuantityNoodles
        dispatch(gotCart(data))
        if (localCartNoodles.length) {
          const serverCartNoodlesIds = data.noodles.map(noodle => noodle.id)
          localCartNoodles.forEach(noodle => {
            if (!serverCartNoodlesIds.includes(noodle.id)) {
              dispatch(addToCart(noodle, data))
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

export const addToCart = (noodle, cart) => {
  return async dispatch => {
    try {
      const existingItem = cart.noodles.find(
        cartItem => cartItem.id === noodle.id
      )
      if (cart.id) {
        if (existingItem) {
          dispatch(increaseItemQuantity(noodle, cart))
        } else {
          const {data} = await axios.put(`/api/orders/${cart.id}`, noodle)
          if (data) {
            dispatch(addedToCart(data))
          }
          if (noodle.quantity > 1) {
            const res = await axios.put(
              `/api/orderItems/${cart.id}/${noodle.id}/${noodle.quantity}`
            )
            dispatch(
              increasedItemQuantity(res.data.noodleId, res.data.quantity)
            )
          }
        }
      } else {
        const localCartNoodles = JSON.parse(localStorage.getItem('noodles'))
        if (existingItem) {
          localCartNoodles.forEach(cartItem => {
            if (cartItem.id === noodle.id) {
              cartItem.quantity += 1
            }
          })
          dispatch(increaseItemQuantity(noodle, cart))
        } else {
          localCartNoodles.push(noodle)
          dispatch(addedToCart(noodle))
        }
        localStorage.setItem('noodles', JSON.stringify(localCartNoodles))
      }
    } catch (error) {
      console.error('Error Adding To Cart', error)
    }
  }
}

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

const defaultCart = {noodles: []}

export default function(state = defaultCart, action) {
  switch (action.type) {
    case GOT_CART:
      return action.cart
    case ADD_TO_CART:
      return {
        ...state,
        noodles: [...state.noodles, action.noodle]
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        noodles: state.noodles.filter(noodle => noodle.id !== action.id)
      }
    case CHECKEDOUT:
      return action.cart
    case REMOVE_CART:
      return defaultCart
    case DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        noodles: state.noodles.map(noodle => {
          if (noodle.id === action.noodleId) {
            noodle.quantity = action.quantity
          }
          return noodle
        })
      }
    case INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        noodles: state.noodles.map(noodle => {
          if (noodle.id === action.noodleId) {
            noodle.quantity = action.quantity
          }
          return noodle
        })
      }
    default:
      return state
  }
}
