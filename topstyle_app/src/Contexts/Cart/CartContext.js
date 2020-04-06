import {createContext} from 'react';


const initialState = {

    cart: [],
    addProduct: () => {},
    clearCart: () => {},
    makeOrder: (customerID) => {}
};

const CartContext = createContext(initialState);

export default CartContext;