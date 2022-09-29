import * as ActionTypes from '../ActionTypes'

const initVal = {
    cart: [],
}


export const cartReducer = (state = initVal, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: state.cart.concat(action.payload),
            }
        default:
            return state;
    }
}