import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllProducts } from '../redux/actions/products/productActions'

const ProductsPage = (props) => {

  // const [products, setProducts] = useState({})

  // const getProducts = useCallback(() => {
  //   const newProducts = props.getAllProducts()
  //   setProducts(newProducts)
  // })

  useEffect(() => {
    // const newProduct = props.getAllProducts()
    console.log(props)
    // console.log(newProduct)
    // setProducts(newProduct)
  }, [props])

  // console.log(props.products)

  const goToDashboard = () => {
    props.history.push('/dashboard')
  }

  return (
    <div>
      <p>No Products yet</p>
      <p>Name</p>
      <p>Price</p>
      <p>Inventory</p>
      <p>Minimum stock</p>
      <p>Category</p>
      <button style={{ margin: '20px auto 0 auto', display: 'inherit' }} className='login-btn' onClick={goToDashboard}>Back</button>
    </div>
  )
}

ProductsPage.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  products: state.products,
  errors: state.productsError
})

export default connect(mapStateToProps, { getAllProducts })(ProductsPage)