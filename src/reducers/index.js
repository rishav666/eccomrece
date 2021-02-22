import {combineReducers} from 'redux';
import product from './product.js'
import addtocart from './addtocart.js'
const rootReducer = combineReducers({
product,
addtocart
})
export default rootReducer;
