import * as types from "../types";

const INITIAL_STATE = {
    productItems: [],
    isLoading: false,
    errorMessage: ''
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_PRODUCT_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case types.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                productItems: action.payload,
                isLoading: false,
                error: ''
            }
        case types.GET_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default productReducer