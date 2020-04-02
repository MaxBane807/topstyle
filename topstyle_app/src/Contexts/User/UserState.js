import UserContext from './UserContext';
import { useReducer } from 'react';

const UserState = ({children}) => {

    const [userState, dispatch] = useReducer()


    return(<UserContext.Provider value={}>
        {children}
    </UserContext.Provider>);

};

export default UserState;