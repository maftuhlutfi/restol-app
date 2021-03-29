import { getCategory } from "../api"
import { GET_CATEGORIES_FAILURE, GET_CATEGORIES_START, GET_CATEGORIES_SUCCESS } from "../types"

export const getCategoryStart = () => async dispatch => {
    dispatch({type: GET_CATEGORIES_START})
    try {
        const data = await getCategory()
        dispatch(getCategorySuccess(data))
    }
    catch (err) {
        dispatch(getCategoryFailure(err))
    }
}

export const getCategorySuccess = data => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: data
})

export const getCategoryFailure = errorMessage => ({
    type: GET_CATEGORIES_FAILURE,
    payload: errorMessage
})