import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

import categoryReducer from './categoryReducer'
import productReducer from './productReducer'

const allReducers = combineReducers({
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer
})

export default allReducers