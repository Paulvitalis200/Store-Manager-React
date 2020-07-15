import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import productsReducer from './products/productsReducer'
import productsErrorReducer from './products/productsErrorReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    products: productsReducer,
    productsError: productsErrorReducer
})

export default rootReducer