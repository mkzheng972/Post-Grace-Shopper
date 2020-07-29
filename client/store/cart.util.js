import store from './index'
import {removeFromCart} from './cart'
export const decreaseItemQuantityUtil = (cartItems, cartItemToRemove, cart) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem.quantity === 1) {
    store.dispatch(removeFromCart(cartItemToRemove, cart.id))
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  } else {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
  }
}

export const increaseItemQuantityUtil = (cartItems, cartItemToAdd) => {
  console.log(cartItems, cartItemToAdd)
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  )
  console.log(existingCartItem)
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    )
  }
  console.log('hit')
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}
