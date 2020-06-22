import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../redux/actions/authActions'

const LoginPage = (props) => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [hasSubmitted, setHasSubmitted] = useState(false)

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
        Store Manager
      </div>
      <div>
        <h2>ACCOUNT LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type='text' name='email' onChange={handleChange} />
          <label>Password</label>
          <input type='password' name='password' onChange={handleChange} />
          <button>Log in</button>
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