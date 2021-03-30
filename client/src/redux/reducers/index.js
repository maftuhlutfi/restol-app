import { combineReducers } from "redux";

import categoryReducer from './categoryReducer'
import productReducer from './productReducer'

const allReducers = combineReducers({
    category: categoryReducer,
    product: productReducer
})

export default allReducers