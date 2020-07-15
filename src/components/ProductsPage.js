import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllProducts } from '../redux/actions/products/productActions'

const ProductsPage = React.memo(props => {

  const [products, setProducts] = useState({})

  const { getAllProducts, items } = props

  useEffect(() => {
    getAllProducts()
  }, [getAllProducts])

  useEffect(() => {
    setProducts(items)
  }, [items])

  const goToDashboard = () => {
    props.history.push('/dashboard')
  }

  return (
    <div>
      {
        products.length > 0 && <div>
          {
            products.map(product => {
              return (
                <div key={product['product id']}>
                  {product.name}
                  {product.price}
                </div>
              )
            })
          }
        </div>
      }
      <button style={{ margin: '20px auto 0 auto', display: 'inherit' }} className='login-btn' onClick={goToDashboard}>Back</button>
    </div>
  )
})

ProductsPage.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  items: state.products.products,
  errors: state.productsError
})

export default connect(mapStateToProps, { getAllProducts })(ProductsPage)