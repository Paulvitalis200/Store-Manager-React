import React, { useState } from 'react';


const CreateProductPage = (props) => {

  const goToDashboard = () => {
    props.history.push('/dashboard')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2>Create a Product!</h2>
      <form className='create-product-div'>
        <div className='email-container'>
          <label>Product name</label>
          <input type='text' name='' />
        </div>
        <div className='email-container'>
          <label>Inventory</label>
          <input type='text' name='' />
        </div>
        <div className='email-container'>
          <label>Price</label>
          <input type='text' name='' />
        </div>
        <div className='email-container'>
          <label>Minimum stock</label>
          <input type='text' name='' />
        </div>
        <div style={{ marginBottom: '20px' }} className='email-container'>
          <label>Category</label>
          <input type='text' name='' />
        </div>
        <button className='login-btn' onSubmit={handleSubmit}>
          {/* {
            hasSubmitted && loading && !errors?.length
              ? <span>
                <div id='mini-loader'></div>
              </span>
              : <span>Log in</span>
          } */}
          Create
        </button>
      </form>
      <button style={{ margin: '20px auto 0 auto', display: 'inherit' }} className='login-btn' onClick={goToDashboard}>Back</button>
    </div>
  )
}

export default CreateProductPage