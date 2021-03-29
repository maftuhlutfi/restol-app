import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

import allReducers from './reducers'

const middleware = [thunk]

export const store = createStore(allReducers, composeWithDevTools(
    applyMiddleware(...middleware)
))