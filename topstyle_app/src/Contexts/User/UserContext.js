import React,{createContext} from 'react';

const initialState = {

    LoggedIn: false,

    NewUser: ({
        username,
        password,
        firstname,
        lastname,
        phone,
        email
    }) => {},

    Login: ({username,password}) => {}
};

const UserContext = createContext(initialState);

export default UserContext;