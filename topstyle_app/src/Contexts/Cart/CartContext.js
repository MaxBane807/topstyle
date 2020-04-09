import {createContext} from 'react';


const initialState = {

    cart: [],
    addProduct: () => {},
    clearCart: () => {},
    makeOrder: (customerID) => {},
    nrOfItems: 0
};

const CartContext = createContext(initialState);

export default CartContext;