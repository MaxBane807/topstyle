import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () => {

    return(
    <ul>
        <li>
            <NavLink to="/">Hem</NavLink>
        </li>
        <li>
            <NavLink to="CreateAccount">Skapa konto</NavLink>
        </li>
    </ul>
    );

}

export default Navigation;