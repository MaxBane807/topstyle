import UserContext from './UserContext';
import React, { useReducer, useState } from 'react';
import { createUser, loginUser } from '../../Api';


const UserState = ({children}) => {

    const [LoggedIn, setLoggedIn] = useState(false);

    const [User, setUser] = useState("");

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

    const Login = async (username,password) => {
        
        let result = await loginUser({username,password});
        
        if (result)
        {
            setLoggedIn(true);
            setUser(result);
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

    

    return(<UserContext.Provider value={{LoggedIn,User,NewUser,Login,Logout}}>
        {children}
    </UserContext.Provider>);

};

export default UserState;