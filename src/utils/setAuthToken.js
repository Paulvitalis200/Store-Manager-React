import axios from 'axios'

const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common['Authorization'] = token
  } else {
    // Delete auth token
    delete axios.defaults.headers.common['Authorization']
  }
}

export const getAccessToken = () => localStorage.getItem("jwtToken")

export const api = axios.create({
  baseURL: 'https://ah-robotics-staging.herokuapp.com/api/v1',
  headers: getAccessToken() ? {
    Authorization: `Bearer  ${getAccessToken()}`,
  } : {},
});

export default setAuthToken