import React, { useState } from 'react';
import CartContext from './CartContext';

const CartState = ({children}) => {


    const [cart, setCart] = useState([]);

    const addProduct = (product) => {

        setCart([...cart,product]);

    }
    const clearCart = () => {

        
    }

    return (<CartContext.Provider value={{
        cart,
        addProduct}}>
        {children}
    </CartContext.Provider>);


}
export default CartState;