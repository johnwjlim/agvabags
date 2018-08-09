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
        default: 
            return state;
    }
}


const createStore = () => reduxCreateStore(rootReducer, initialState);
export default createStore;