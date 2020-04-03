import React, { useRef, useContext } from 'react';
import UserContext from '../Contexts/User/UserContext';

const Login = () => {

    let usernameRef = useRef();
    let passwordRef = useRef();

    const {Login} = useContext(UserContext);

    const loginHandler = () => {

        if (Login(usernameRef.current.value,passwordRef.current.value))
        {
            alert("Du är nu inloggad");
        }

    }
    
    return (<React.Fragment>
        <h1>Logga in</h1>
        <label htmlFor="username">Användarnamn</label>
        <input ref={usernameRef} id="username" type="text"></input>

        <label htmlFor="password">Lösenord</label>
        <input ref={passwordRef} id="password" type="text"></input>

        <button onClick={e => {loginHandler();}}>Logga in</button>
    </React.Fragment>);

}

export default Login;