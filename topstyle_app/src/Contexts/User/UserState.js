import UserContext from './UserContext';
import React, { useReducer, useState } from 'react';
import { createUser, loginUser } from '../../Api';


const UserState = ({children}) => {

    const [LoggedIn, setLoggedIn] = useState(false);

    const NewUser = (
        username,
        password,
        firstname,
        lastname,
        phone,
        email) => {createUser ({
            username,
            password,
            firstname,
            lastname,
            phone,
            email});
    };

    const Login = (username,password) => {
        
        if (loginUser({username,password}))
        {
            setLoggedIn(true);
            return true;
        }
        else
        {
            return false;
        }  
    }

    const Logout = () => {

        setLoggedIn(false);
    }

    

    return(<UserContext.Provider value={{LoggedIn,NewUser,Login,Logout}}>
        {children}
    </UserContext.Provider>);

};

export default UserState;