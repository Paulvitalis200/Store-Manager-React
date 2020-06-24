import { LOADING_PRODUCTS, SET_PRODUCTS } from '../../actions/products/productTypes'


const initialState = {
  products: {},
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case LOADING_PRODUCTS:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}