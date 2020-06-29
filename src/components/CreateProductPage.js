import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createProduct } from '../redux/actions/products/productActions'


const CreateProductPage = (props) => {

  const [form, setForm] = useState({
    name: '',
    inventory: '',
    price: '',
    stock: '',
    category: ''
  })
  // const [hasSubmitted, setHasSubmitted] = useState(false)
  // const [errors, setErrors] = useState('')

  const goToDashboard = () => {
    props.history.push('/dashboard')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // setHasSubmitted(true)
    // setLoading(true)
    const name = form['name'] || ''
    const inventory = form['inventory'] || ''
    const price = form['price'] || ''
    const stock = form['stock'] || ''
    const category = form['category'] || ''

    const payload = {
      name: name,
      inventory: inventory,
      price: price,
      minimum_stock: stock,
      category: category
    }
    props.createProduct(payload)
  }

  const handleChange = (e) => {
    const obj = form
    obj[e.target.name] = e.target.value
    setForm({ ...form, ...obj })
    // setHasSubmitted(false)
    // setErrors('')
  }

  return (
    <div>
      <h2>Create a Product!</h2>
      <form className='create-product-div' onSubmit={handleSubmit}>
        <div className='email-container'>
          <label>Product name</label>
          <input type='text' name='name' onChange={handleChange} />
        </div>
        <div className='email-container'>
          <label>Inventory</label>
          <input type='text' name='inventory' onChange={handleChange} />
        </div>
        <div className='email-container'>
          <label>Price</label>
          <input type='text' name='price' onChange={handleChange} />
        </div>
        <div className='email-container'>
          <label>Minimum stock</label>
          <input type='text' name='stock' onChange={handleChange} />
        </div>
        <div style={{ marginBottom: '20px' }} className='email-container'>
          <label>Category</label>
          <input type='text' name='category' onChange={handleChange} />
        </div>
        <button className='login-btn'>
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

CreateProductPage.propTypes = {
  createProduct: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps, { createProduct })(CreateProductPage)