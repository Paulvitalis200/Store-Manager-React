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

// Create Product
export const createProduct = (data, dispatch) => {
  const bearerText = 'Bearer '
  const token = localStorage.getItem("jwtToken")
  const bearerToken = bearerText.concat(token)

  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': bearerToken
  }
  axios
    .post('https://storemanagerapi2.herokuapp.com/api/v2/products',
      data,
      {
        headers,
      }
    )
    .then(res =>
      dispatch({
        type: SET_PRODUCTS,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

// Loading Products
export const loadProducts = () => {
  return {
    type: LOADING_PRODUCTS
  }
}
