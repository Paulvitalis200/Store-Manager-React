import axios from 'axios'
import { LOADING_SALES_RECORDS, GET_SALES_RECORDS } from './salesTypes'

// Get Products
export const getSalesRecords = () => dispatch => {
  axios
    .get('https://storemanagerapi2.herokuapp.com/api/v2/sales',
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` }
      }
    )
    .then(res =>
      dispatch({
        type: GET_SALES_RECORDS,
        payload: res.data.Sales
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


// Loading Sales
export const loadSales = () => {
  return {
    type: LOADING_SALES_RECORDS
  }
}
