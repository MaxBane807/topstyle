import React, { useContext } from 'react';
import CartContext from '../Contexts/Cart/CartContext';

const ShoppingCart = () => {

    const {cart} = useContext(CartContext);

    let list = cart.map((x) => {

    return (<li>{x.Name} Pris: {x.Price} kr</li>);
    });
    
    return(<React.Fragment>
        <h2>Varukorg</h2>
        <ul>{list}</ul>
        </React.Fragment>);
}

export default ShoppingCart;