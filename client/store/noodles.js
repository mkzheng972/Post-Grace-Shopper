/* eslint-disable no-case-declarations */
import axios from 'axios'

//ACTION TYPES
const GET_NOODLES = 'GET_NOODLES'
const GET_SINGLE_NOODLE = 'GET_SINGLE_NOODLE'
const ADD_NOODLE = 'ADD_NOODLE'
const DELETE_NOODLE = 'DELETE_NOODLE'
const UPDATE_NOODLE = 'UPDATE_NOODLE'
const SORT_NOODLES = 'SORT_NOODLES'

//ACTION CREATOR
const gotNoodles = noodles => ({
  type: GET_NOODLES,
  noodles
})

const gotSingleNoodle = noodle => ({
  type: GET_SINGLE_NOODLE,
  noodle
})

const addedNoodle = noodle => ({
  type: ADD_NOODLE,
  noodle
})

const deletedNoodle = id => ({
  type: DELETE_NOODLE,
  id
})

const updatedNoodle = noodle => ({
  type: UPDATE_NOODLE,
  noodle
})

const sortedNoodles = noodles => ({
  type: SORT_NOODLES,
  noodles
})

export const sortNoodles = type => async dispatch => {
  try {
    const {data} = await axios.get('/api/noodles')
    let sorted
    if (type === 'veggie') {
      sorted = data.filter(noodle => noodle.isVeggie)
    } else {
      sorted = data.filter(noodle => noodle.noodleType === type)
    }
    dispatch(sortedNoodles(sorted))
  } catch (error) {
    console.error('Error Sorting All Noodles', error)
  }
}

//THUNKS
export const getAllNoodles = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/noodles')
    dispatch(gotNoodles(data))
  } catch (error) {
    console.error('Error Getting All Noods', error)
  }
}

export const getSingleNoodle = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/noodles/${id}`)
    dispatch(gotSingleNoodle(data))
  } catch (error) {
    console.error('Error Getting Single Noods', error)
  }
}

export const addNoodle = noodle => async dispatch => {
  try {
    const {data} = await axios.post(`/api/noodles/`, noodle)
    dispatch(addedNoodle(data))
  } catch (error) {
    console.error('Error Adding A Nood', error)
  }
}

export const deleteNoodle = id => async dispatch => {
  try {
    await axios.delete(`/api/noodles/${id}`)
    dispatch(deletedNoodle(id))
  } catch (error) {
    console.error('Error Deleting A Nood', error)
  }
}

export const updateNoodle = (noodle, id) => async dispatch => {
  try {
    const {data} = await axios.put(`api/noodles/${id}`, noodle)
    dispatch(updatedNoodle(data))
  } catch (error) {
    console.error('Error Updating Nood', error)
  }
}

//REDUCER

export const noodlesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_NOODLES:
      return action.noodles
    case ADD_NOODLE:
      return [...state, action.noodle]
    case DELETE_NOODLE:
      return state.filter(noodle => noodle.id !== action.id)
    case UPDATE_NOODLE:
      return state.map(
        noodle => (noodle.id === action.noodle.id ? action.noodle : noodle)
      )
    case SORT_NOODLES:
      return action.noodles
    default:
      return state
  }
}

export const noodleReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_NOODLE:
      return action.noodle
    default:
      return state
  }
}
