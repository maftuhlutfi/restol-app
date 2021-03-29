import { combineReducers } from "redux";

import categoryReducer from './categoryReducer'

const allReducers = combineReducers({
    category: categoryReducer
})

export default allReducers