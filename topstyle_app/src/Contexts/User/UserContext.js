import React,{createContext} from 'react';

const initialState = {

    LoggedIn: false,

    User: "",

    NewUser: ({
        username,
        password,
        firstname,
        lastname,
        phone,
        email
    }) => {},

    Login: ({username,password}) => {},

    Logout: () => {}
};

const UserContext = createContext(initialState);

export default UserContext;