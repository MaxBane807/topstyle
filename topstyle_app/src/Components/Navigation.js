import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () => {

    return(
    <ul>
        <li>
            <NavLink to="/">Hem</NavLink>
        </li>
    </ul>
    );

}

export default Navigation;