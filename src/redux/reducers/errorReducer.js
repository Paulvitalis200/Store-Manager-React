import { GET_ERRORS } from '../actions/type'

const initialState = {
  loading: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}