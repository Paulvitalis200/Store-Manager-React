import React, { useState } from 'react';

const LoginPage = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)

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

export default LoginPage