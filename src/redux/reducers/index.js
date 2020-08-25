import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import productsReducer from './products/productsReducer'
import productsErrorReducer from './products/productsErrorReducer'
import salesReducer from './sales/salesReducer'
import salesErrorReducer from './sales/salesErrorReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    products: productsReducer,
    productsError: productsErrorReducer,
    salesRecords: salesReducer,
    salesError: salesErrorReducer
})

export default rootReducer