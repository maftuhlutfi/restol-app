import * as types from "../types";

const INITIAL_STATE = {
    categoryItems: [],
    isLoading: true,
    errorMessage: ''
}

const categoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_CATEGORIES_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case types.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoryItems: action.payload,
                isLoading: false,
                error: ''
            }
        case types.GET_CATEGORIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default categoryReducer