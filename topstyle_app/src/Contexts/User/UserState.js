import UserContext from './UserContext';
import React, { useReducer, useState } from 'react';
import { createUser } from '../../Api';


const UserState = ({children}) => {

    const [userState, setUser] = useState();

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

    

    return(<UserContext.Provider value={{NewUser}}>
        {children}
    </UserContext.Provider>);

};

export default UserState;