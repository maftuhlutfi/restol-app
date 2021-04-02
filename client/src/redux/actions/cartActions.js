import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CLEAR_ITEM_FROM_CART } from "../types";

export const addItem = item => ({
    type: ADD_ITEM_TO_CART,
    payload: item
})

export const removeItem = item => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: item
})

export const clearItem = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
})