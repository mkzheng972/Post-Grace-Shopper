import axios from 'axios'

const GOT_CART = 'GOT_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const COUNT_CHANGE = 'COUNT_CHANGE'

// const gotCart = (cart) => ({
// 	type: GOT_CART,
// 	cart
// });

// export const getCart = (id) => {
// 	return async (dispatch) => {
// 		try {
// 			const { data } = await axios.get(`/api/orders/${id}`);
// 			if (data) dispatch(gotCart(data));
// 		} catch (error) {
// 			console.log('no cart', error);
// 		}
// 	};
// };

const defaultCart = {noodles: [], total: 0}

export const addToCart = noodle => {
  noodle.count = 1
  noodle.total = noodle.price * noodle.count
  return {
    type: ADD_TO_CART,
    noodle
  }
}

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
    // case GOT_CART:
    // 	return { ...state, NoodlesInCart: action.cart };
    case ADD_TO_CART:
      return {
        ...state,
        noodles: [...state.noodles, action.noodle],
        total: state.total + action.noodle.price
      }
    case REMOVE_FROM_CART:
      return state.filter(noodle => noodle.id !== action.id)
    case COUNT_CHANGE:
      return state.map(noodle => {
        if (noodle.id === action.id) noodle.count = action.count
        return noodle
      })
    default:
      return state
  }
}
