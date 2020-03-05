import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const ADD_USER = 'ADD_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (
  email,
  password,
  method,
  firstName,
  lastName
) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {
      firstName,
      lastName,
      email,
      password
    })
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

//REDUCER

//  //Local Storage function
// function getLocalCart(){
//   if (localStorage.getItem('cart')) {
//     console.log("localCart", localStorage.getItem('cart'))
//   // localStorage.setItem('cart', JSON.stringify(JSON.parse(localStorage.getItem('cart'))));
//   }
// }
// //Local Storage function
// function addToLocalCart(noodle){
//   let localCart = [];
//   if (!localStorage.getItem('cart')) {
//     console.log("there is a localstorage item")
//     localCart.push(JSON.parse(localStorage.getItem('cart')));
//   }
//   console.log("nooodle", noodle)
//   localCart.push(noodle);
//   console.log("localCart", localCart)
//   localStorage.setItem('cart', localCart);
// }

export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
