import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from '../redux/actions/authActions'
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  useEffect(() => {
    if (props.auth.isAuthenticated === false) {
      props.history.push('/')
    }
  }, [props.history, props.auth])
  const handleLogout = (e) => {
    e.preventDefault()
    props.logoutUser()
  }

  return (
    <div>
      <div onClick={handleLogout}>
        Logout
      </div>
      <div>
        <div>
          <p>Username: {localStorage.getItem('username')}</p>
          <p>Role: {localStorage.getItem('role')}</p>
        </div>
        <div>
          <Link to='/products'>
            Products
          </Link>
        </div>
        <div>
          <p>
            <Link to='/create-product'>
              Create product
            </Link>
          </p>
          <p>Modify/Delete product</p>
        </div>
        <div>
          <p>Sign Up Employee</p>
          <Link to='/sales'>
            <p>View sales records</p>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Dashboard)