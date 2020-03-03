const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = noodle => ({
  type: ADD_TO_CART,
  noodle
})

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.noodle]
    default:
      return state
  }
}
