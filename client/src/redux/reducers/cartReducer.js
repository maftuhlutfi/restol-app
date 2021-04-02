import { ADD_ITEM_TO_CART, CLEAR_ITEM_FROM_CART, REMOVE_ITEM_FROM_CART } from "../types";
import { addItemToCart, removeItemFromCart } from "../utils/cartUtils";

const INITIAL_STATE = {
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return {
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case REMOVE_ITEM_FROM_CART:
            return {
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CLEAR_ITEM_FROM_CART:
            return {
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default cartReducer