import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import UserContext from '../Contexts/User/UserContext';


const Navigation = () => {

    const {LoggedIn,Logout} = useContext(UserContext);

    const logoutHandler = () => {

        Logout();
    }

    let cartlink;
    let loginToggler =  (<li>
                        <NavLink to="/Login">Logga in</NavLink>
                        </li>);

    if (LoggedIn == true)
    {
        cartlink = 
        (<li>
        <NavLink to="/ShoppingCart">Shoppingvagn</NavLink>
        </li>);

        loginToggler = (<button onClick={e => {logoutHandler();}}>Logga ut</button>);
    }


    return(
    <ul>
        <li>
            <NavLink to="/Home">Hem</NavLink>
        </li>
        <li>
            <NavLink to="/CreateAccount">Skapa konto</NavLink>
        </li>
        
        {loginToggler}
        {cartlink}
    </ul>
    );

}

export default Navigation;