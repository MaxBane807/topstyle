import React, { useRef, useContext } from 'react';
import UserContext from '../Contexts/User/UserContext';

const Login = () => {

    let usernameRef = useRef();
    let passwordRef = useRef();

    const {Login} = useContext(UserContext);

    let failedLogin = (<p></p>);

    const loginHandler = async () => {

        let loginAtempt = await Login(usernameRef.current.value,passwordRef.current.value);
        if (loginAtempt)
        {
            alert("Du är nu inloggad");
            failedLogin = (<p></p>);
        }
        else
        {
            failedLogin = (<p>Felaktigt användarnamn eller lösenord</p>);
        }

    }
    
    return (<React.Fragment>
        <h1>Logga in</h1>
        <label htmlFor="username">Användarnamn</label>
        <input ref={usernameRef} id="username" type="text"></input>

        <label htmlFor="password">Lösenord</label>
        <input ref={passwordRef} id="password" type="text"></input>

        <button onClick={async e => {await loginHandler();}}>Logga in</button>

        {failedLogin}
    </React.Fragment>);

}

export default Login;