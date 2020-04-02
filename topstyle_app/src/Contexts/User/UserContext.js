import React,{createContext} from 'react';

const initialState = {

    NewUser: ({
        username,
        password,
        firstname,
        lastname,
        phone,
        email
    }) => {}


};

const UserContext = createContext(initialState);

export default UserContext;