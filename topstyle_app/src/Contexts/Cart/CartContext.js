import {createContext} from 'react';


const initialState = {

    cart: [],
    addProduct: () => {},
    clearCart: () => {}
};

const CartContext = createContext(initialState);

export default CartContext;