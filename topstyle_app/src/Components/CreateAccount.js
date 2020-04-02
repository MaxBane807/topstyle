import React, { useContext } from 'react';
import { useRef } from 'react';
import UserContext from '../Contexts/User/UserContext';

const CreateAccount = () => {

    const {NewUser} = useContext(UserContext)
    
    let usernameRef = useRef();
    let passwordRef = useRef();
    let firstnameRef = useRef();
    let lastnameRef = useRef();
    let phoneRef = useRef();
    let emailRef = useRef();

    const saveHandler = () => {

        NewUser(usernameRef.current.value,
                passwordRef.current.value,
                firstnameRef.current.value,
                lastnameRef.current.value,
                phoneRef.current.value,
                emailRef.current.value);

    }

    return (<form>
        <h1>Skapa användare</h1>
        <label htmlFor="username">Användarnamn</label>
        <input ref={usernameRef} id="username" type="text"></input>

        <label htmlFor="password">Lösenord</label>
        <input ref={passwordRef} id="password" type="text"></input>

        <label htmlFor="firstname">Förnamn</label>
        <input ref={firstnameRef} id="firstname" type="text"></input>

        <label htmlFor="lastname">Efternamn</label>
        <input ref={lastnameRef} id="lastname" type="text"></input>

        <label htmlFor="phone">Telefonnummer</label>
        <input ref={phoneRef} id="phone" type="text"></input>

        <label htmlFor="email">Email</label>
        <input ref={emailRef} id="email" type="text"></input>

        <button onClick={e => {saveHandler();}}>Spara</button>
    </form>)

}

export default CreateAccount;