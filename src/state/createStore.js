import { createStore as reduxCreateStore } from "redux"

const initialState = {
    toggleMenu: false,
    cart: []
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_MENU": {
            return {...state, toggleMenu: !state.toggleMenu};
        }
        case "CLOSE_MENU": {
            return {...state, toggleMenu: false};
        }
        case "ADD_CART": {
            return {...state, cart: [...state.cart, action.payload]};
        }
        case "REMOVE_CART": {
            return {...state, cart: {...state.cart.slice(0, action.payload), ...state.cart.slice(action.payload + 1)}};
        }
        default: 
            return state;
    }
}


const createStore = () => reduxCreateStore(rootReducer, initialState);
export default createStore;