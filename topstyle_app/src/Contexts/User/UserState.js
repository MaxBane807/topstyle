import UserContext from './UserContext';
import React, { useReducer, useState } from 'react';
import { createUser, loginUser, checkUsername} from '../../Api';


const UserState = ({children}) => {

    const [LoggedIn, setLoggedIn] = useState(false);

    const [User, setUser] = useState("");

    const NewUser = async (
        username,
        password,
        firstname,
        lastname,
        phone,
        email) => { 
            
            console.log("nu körs koden");
            let check = await checkUsername(username);
            if (check == true)
            {
                await createUser ({
                username,
                password,
                firstname,
                lastname,
                phone,
                email});
                return true;
            }
            else
            {
                return false;
            }
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

    

    return(<UserContext.Provider value={{LoggedIn,User,NewUser,Login,Logout, checkUserName}}>
        {children}
    </UserContext.Provider>);

};

export default UserState;