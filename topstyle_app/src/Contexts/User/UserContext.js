import {createContext} from 'react';

const initialState = {

    createUser: () => {}


};

const UserContext = createContext(initialState);

export default UserContext;