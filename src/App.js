import React from 'react';
import LoginPage from './components/LoginPage';
import './resources/main.css'
import Dashboard from './components/Dashboard';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router >
  );
}

export default App;
