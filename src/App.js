import React from 'react';
import LoginPage from './components/LoginPage';
import './resources/main.css'
import Dashboard from './components/Dashboard';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import NotFound from './components/NotFound';
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './redux/actions/authActions'
import PrivateRoute from './components/PrivateRoute'
import store from './redux/store'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());    // Redirect to login
    window.location.href = "/";
  }
}

function App() {
  return (
    <Router>
      <Route exact path='/' component={LoginPage} />
      <Switch>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Router >
  );
}

export default App;
