import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () => {

    return(
    <ul>
        <li>
            <NavLink to="/Home">Hem</NavLink>
        </li>
        <li>
            <NavLink to="/CreateAccount">Skapa konto</NavLink>
        </li>
        <li>
            <NavLink to="/Login">Logga in</NavLink>
        </li>
    </ul>
    );

}

export default Navigation;