import { getProductByCategory } from "../api"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_START, GET_PRODUCT_SUCCESS } from "../types"

export const getProductStart = kategoriId => async dispatch => {
    dispatch({type: GET_PRODUCT_START})
    try {
        const data = await getProductByCategory(kategoriId)
        dispatch(getProductSuccess(data))
    }
    catch (err) {
        dispatch(getProductFailure(err))
    }
}

export const getProductSuccess = successPayload => ({
    type: GET_PRODUCT_SUCCESS,
    payload: successPayload
})

export const getProductFailure = errorMessage => ({
    type: GET_PRODUCT_FAILURE,
    payload: errorMessage
})