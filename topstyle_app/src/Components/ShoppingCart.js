import React, { useContext } from 'react';
import CartContext from '../Contexts/Cart/CartContext';
import UserContext from '../Contexts/User/UserContext';

const ShoppingCart = () => {

    const {cart,makeOrder} = useContext(CartContext);

    const {User} = useContext(UserContext);

    let list = cart.map((x) => {

    return (<li>{x.Name} Pris: {x.Price} kr</li>);
    });

    const orderHandler = async () => {

        await makeOrder(User.CustomerID);
    }
    
    return(<React.Fragment>
        <h2>Varukorg</h2>
        <ul>{list}</ul>
        <button onClick={e => {orderHandler();}}>Beställ</button>
        </React.Fragment>);
}

export default ShoppingCart;