import {createContext} from 'react';


const initialState = {

    cart: [],
    addProduct: () => {},
    clearCart: () => {},
    makeOrder: (customerID) => {},
    nrOfItems: 0,
    removeProduct: (product) => {},
    totalprice: 0,
    refreshTotal: () => {}
};

const CartContext = createContext(initialState);

export default CartContext;