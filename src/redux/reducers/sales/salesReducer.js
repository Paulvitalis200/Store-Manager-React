import { GET_SALES_RECORDS, LOADING_SALES_RECORDS } from '../../actions/sales/salesTypes'

const initialState = {
  sales: [],
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SALES_RECORDS:
      return {
        ...state,
        sales: action.payload
      }
    case LOADING_SALES_RECORDS:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}