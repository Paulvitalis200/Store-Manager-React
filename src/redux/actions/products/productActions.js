import axios from 'axios'
import { LOADING_PRODUCTS, SET_PRODUCTS } from './productTypes'
// import { getAccessToken } from '../../../utils/setAuthToken'

// Get Products
export const getAllProducts = () => dispatch => {
  axios
    .get('https://storemanagerapi2.herokuapp.com/api/v2/products',
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` }
      }
    )
    .then(res =>
      dispatch({
        type: SET_PRODUCTS,
        payload: res.data.Products
      })
    )
    .catch(err =>
      console.log(err)
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.data.msg
      // })
    )
}

// Loading Products
export const loadProducts = () => {
  return {
    type: LOADING_PRODUCTS
  }
}

// Get Products