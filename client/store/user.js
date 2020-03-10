import axios from 'axios'
import history from '../history'
import {getCart, removeCart, gotCart} from './cart'
import {combineReducers} from 'redux'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

const GOT_ALL_USERS = 'GOT_ALL_USERS'
const ADDED_USER = 'ADDED_USER'
const UPDATED_USER = 'UPDATED_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({
  type: GET_USER,
  user
})
const removeUser = () => ({
  type: REMOVE_USER
})

// added action creators
const gotAllUsers = users => ({
  type: GOT_ALL_USERS,
  users
})

const addedUser = user => ({
  type: ADDED_USER,
  user
})

const updatedUser = user => ({
  type: UPDATED_USER,
  user
})

/**
 * THUNK CREATORS
 */

export const getSingleUser = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/users/${id}`)
    dispatch(getUser(data))
  } catch (error) {
    console.error('Error Getting Single User', error)
  }
}

export const getAllUsers = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users')
    dispatch(gotAllUsers(data))
  } catch (error) {
    console.error('Error Getting All Users', error)
  }
}

export const addUser = user => async dispatch => {
  try {
    const {data} = await axios.post('/api/users', user)
    dispatch(addedUser(data))
  } catch (error) {
    console.error('Error Adding User', error)
  }
}

export const updateUser = (user, id) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/users/${id}`, user)
    dispatch(updatedUser(data))
  } catch (error) {
    console.error('Error Updating User', error)
  }
}

// thunks below were previously created
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
    if (res.data) dispatch(getCart(res.data.id))
    else {
      const noodles = JSON.parse(localStorage.getItem('noodles'))
      if (!noodles) localStorage.setItem('noodles', JSON.stringify([]))
      else {
        dispatch(gotCart({noodles}))
      }
    }
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
    if (res.data) dispatch(getCart(res.data.id))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    dispatch(removeCart())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const userReducer = (state = defaultUser, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_ALL_USERS:
      return action.users
    case ADDED_USER:
      return [...state, action.user]
    case UPDATED_USER:
      return state.map(
        user => (user.id === action.user.id ? action.user : user)
      )
    default:
      return state
  }
}

const user = combineReducers({userReducer, usersReducer})

export default user
