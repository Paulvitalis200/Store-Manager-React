import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../redux/actions/authActions'

const LoginPage = (props) => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  // const [hasSubmitted, setHasSubmitted] = useState(false)

  useEffect(() => {
    // console.log(props.auth)
    if (props.auth.isAuthenticated === true) {
      props.history.push('/dashboard')
    }
  }, [props.auth, props.history])

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = form['email'] || ''
    const password = form['password'] || ''
    const payload = {
      email: email,
      password: password
    }
    props.loginUser(payload)
  }

  const handleChange = (e) => {
    const obj = form
    obj[e.target.name] = e.target.value
    setForm({ ...form, ...obj })
  }

  return (
    <div>
      <div className='login-header'>
        <h1 style={{ margin: '0' }}>Store Manager</h1>
      </div>
      <div className='account-section'>
        <h2 className='account-title'>ACCOUNT LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className='email-container'>
            <label className='login-label'>Email</label>
            <input className='login-input' type='text' name='email' onChange={handleChange} />
          </div>

          <div className='email-container'>
            <label className='login-label'>Password</label>
            <input className='login-input' type='password' name='password' onChange={handleChange} />
          </div>

          <button className='login-btn'>Log in</button>
        </form>
      </div>
    </div>
  )
}

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(LoginPage)