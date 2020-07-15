import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <div className='login-header'>
        Store Manager
            </div>
      <div>
        <h2>ACCOUNT LOGIN</h2>
        <form>
          <label>Email</label>
          <input type='text' />
          <label>Password</label>
          <input type='text' />
          <button>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage