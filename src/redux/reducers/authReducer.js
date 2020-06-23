import { SET_CURRENT_USER, USER_LOADING } from '../actions/type'

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
}

const isEmpty = require('is-empty');

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: true
      }
    case USER_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}