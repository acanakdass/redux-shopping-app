import productsListReducer from './productsListReducer'
import cartReducer from './cartReducer'
import categoriesReducer from './categoriesReducer'
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
   productsListReducer: productsListReducer,
   cartReducer: cartReducer,
   categoriesReducer: categoriesReducer
})

export default rootReducer;