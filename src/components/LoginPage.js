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
  const [errors, setErrors] = useState('')
  const [loading, setLoading] = useState(props.loading)

  useEffect(() => {
    if (props.auth.isAuthenticated === true) {
      props.history.push('/dashboard')
    }
  }, [props.auth, props.errors, props.history, hasSubmitted, loading])

  useEffect(() => {
    const { error } = props.errors
    if (error) {
      setErrors(error.message)
      setLoading(false)
    }
  }, [props.errors])

  const handleSubmit = (e) => {
    e.preventDefault()

    // if (hasSubmitted) return

    // Mark form as submitted
    setHasSubmitted(true)
    setLoading(true)
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
    setHasSubmitted(false)
    setErrors('')
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
            {
              hasSubmitted && errors && errors.length &&
              <small className='error'>
                Incorrect Email or password
              </small>
            }
            <label className='login-label'>Email</label>
            <input style={{ marginBottom: '10px' }} className='login-input' type='text' name='email' onChange={handleChange} />
          </div>
          <div className='email-container'>
            <label className='login-label'>Password</label>
            <input className='login-input' type='password' name='password' onChange={handleChange} />
          </div>
          {
            form.email.length === 0 || form.password.length === 0 ? (
              <button disabled={!form['email']} className='login-btn-disabled'>Log in</button>
            ) : (
                <button className='login-btn'>
                  {
                    hasSubmitted && loading && !errors?.length
                      ? <span>
                        <div id='mini-loader'></div>
                      </span>
                      : <span>Log in</span>
                  }
                </button>
              )
          }
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
  errors: state.errors,
  loading: state.auth.loading
})

export default connect(mapStateToProps, { loginUser })(LoginPage)