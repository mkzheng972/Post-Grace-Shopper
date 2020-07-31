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
      }
    } catch (error) {
      console.error('Error Increasing Item Quantity', error)
    }
  }
}

// export const decreaseItemQuantity = (noodle, cart) => {
//   console.log(noodle, cart)
//   return async dispatch => {
//     try {
//       console.log(cart.id)
//       if (cart.id) {
//         const {data} = await axios.put(
//           `/api/orderItems/${cart.id}/${noodle.id}/${noodle.quantity}`
//         )
//         if (data) {
//           console.log(data)
//         }
//       } else {
//       }
//     } catch (error) {
//       console.error('Error Decreasing Item Quantity', error)
//     }
//   }
// }

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
      if (existingItem) {
        dispatch(increasedItemQuantity(noodle, cart.noodles))
      } else if (cart.id) {
        const {data} = await axios.put(`/api/orders/${cart.id}`, noodle)
        if (data) dispatch(addedToCart(data))
      } else {
        const localCartNoodles = JSON.parse(localStorage.getItem('noodles'))
        localCartNoodles.push(noodle)
        localStorage.setItem('noodles', JSON.stringify(localCartNoodles))
        dispatch(addedToCart(noodle))
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
        noodles: decreaseItemQuantityUtil(
          state.noodles,
          action.noodle,
          action.cart
        )
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
        // noodles: increaseItemQuantityUtil(
        //   state.noodles,
        //   action.noodle,
        //   action.cart
        // )
      }
    default:
      return state
  }
}
