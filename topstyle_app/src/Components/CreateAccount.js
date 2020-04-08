import React, { useContext, useState, useCallback, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import { useRef } from 'react';
import UserContext from '../Contexts/User/UserContext';
import { Typography } from '@material-ui/core';
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      width: '25ch',
    },
  }));


const CreateAccount = () => {

    const classes = useStyles();
    
    const {NewUser} = useContext(UserContext)
    
    let usernameRef = useRef();
    let passwordRef = useRef();
    let firstnameRef = useRef();
    let lastnameRef = useRef();
    let phoneRef = useRef();
    let emailRef = useRef();

    const firstRender = useRef(true);

    const [disable, setDisabled] = useState(true);
    const [redirect, setRedirect] = useState(false);
    const [userNameTaken, setUserNameTaken] = useState(false);

    const [usernameState,setUsernameState] = useState("");
    const [passwordState,setPasswordState] = useState("");
    const [firstnameState, setFirstnameState] = useState("");
    const [lastnameState, setLastnameState] = useState("");
    const [phoneState, setPhoneState] = useState("");
    const [emailState, setEmailState] = useState("");

    const [usernameError,setUsernameError] = useState(null);
    const [passwordError,setPasswordError] = useState(null);
    const [firstnameError,setFirstNameError] = useState(null);
    const [lastnameError,setLastNameError] = useState(null);
    const [phoneError, setPhoneError] = useState(null);
    const [emailError, setEmailError] = useState(null);

    const saveHandler = async () => {

        let check = await NewUser(usernameRef.current.value,
          passwordRef.current.value,
          firstnameRef.current.value,
          lastnameRef.current.value,
          phoneRef.current.value,
          emailRef.current.value);
        
        if (check)
        {
          setRedirect(true);
        }
        else
        {
          setUserNameTaken(true);
        }
        

    }
    const formValidation = useCallback(() => {

        let notValid = false;
        
        if (usernameState == "" || usernameState == null)
        {
            setUsernameError("Användarnamn är obligatoriskt");
            notValid = true;
        }
        else if(usernameState.length > 50)
        {
            setUsernameError("Max 50 tecken");
            notValid = true;
        }
        else if (userNameTaken == true)
        {
          setUsernameError("Användarnamnet var upptaget");
          notValid = true;
        }
        else
        {
          setUsernameError(null);
        }

        if (passwordState == "" || passwordState == null)
        {
          setPasswordError("Lösenord är obligatoriskt");
          notValid = true;
        }
        else if (passwordState.length > 50)
        {
          setPasswordError("Max 50 tecken");
          notValid = true;
        }
        else
        {
          setPasswordError(null);
        }

        if (firstnameState.length > 30)
        {
          setFirstNameError("Max 30 tecken");
          notValid = true;
        }
        else
        {
          setFirstNameError(null);
        }

        if (lastnameState.length > 30)
        {
          setLastNameError("Max 30 tecken");
          notValid = true;
        }
        else
        {
          setLastNameError(null);
        }

        if (phoneState.length > 50)
        {
          setPhoneError("Max 50 tecken");
          notValid = true;
        }
        else
        {
          setPhoneError(null);
        }

        if (emailState == "" || emailState == null)
        {
          setEmailError("Email är obligatoriskt");
          notValid = true;
        }
        else if (emailState.length > 30)
        {
          setEmailError("Max 30 tecken");
          notValid = true;
        }
        else
        {
          setEmailError(null);
        }

        return notValid;
    },[usernameState
      ,passwordState
      ,firstnameState
      ,lastnameState
      ,phoneState
      ,emailState
      ,userNameTaken]);

      useEffect(() => {

        if (firstRender.current)
        {
          firstRender.current = false;
          return;
        }

        setDisabled(formValidation());

      },[usernameState,
        passwordState,
        firstnameState,
        lastnameState,
        phoneState,
        emailState,
        userNameTaken,
        formValidation]);

    if (redirect)
    {
      return (<Redirect to='/Home'/>);
    }

    return (<React.Fragment>
        <Typography variant="h3">Skapa användare</Typography>
    <div className={classes.root}>
        <div>
        <TextField
            required
            onChange={(e) => { setUserNameTaken(false);
              setUsernameState(usernameRef.current.value);}}
            margin="normal"
            inputRef={usernameRef}
          variant="outlined"
          label="Användarnamn"
          style={{ margin: 16 }}
          helperText={usernameError}
          InputLabelProps={{
            shrink: true,
          }}
          error={usernameError !== null}
        />
        <TextField
            required
            onChange={(e) => setPasswordState(passwordRef.current.value)}
            margin="normal"
            inputRef={passwordRef}
          variant="outlined"
          label="Lösenord"
          style={{ margin: 16 }}
          helperText={passwordError}
          InputLabelProps={{
            shrink: true,
          }}
          type="password"
          error={passwordError !== null}
        />

        <TextField
            inputRef={firstnameRef}
            margin="normal"
            onChange={(e) => setFirstnameState(firstnameRef.current.value)}
          variant="outlined"
          label="Förnamn"
          helperText={firstnameError}
          style={{ margin: 16 }}
          InputLabelProps={{
            shrink: true,
          }}
          error={firstnameError !== null}
        />

        <TextField
            inputRef={lastnameRef}
            margin="normal"
            onChange={(e) => setLastnameState(lastnameRef.current.value)}
          variant="outlined"
          label="Efternamn"
          helperText={lastnameError}
          style={{ margin: 16 }}
          InputLabelProps={{
            shrink: true,
          }}
          error={lastnameError !== null}
        />

        <TextField
            inputRef={phoneRef}
            margin="normal"
            onChange={(e) => setPhoneState(phoneRef.current.value)}
          variant="outlined"
          label="Telefonnummer"
          style={{ margin: 16 }}
          helperText={phoneError}
          InputLabelProps={{
            shrink: true,
          }}
          error={phoneError !== null}
        />

        <TextField
            margin="normal"
            inputRef={emailRef}
            onChange={() => setEmailState(emailRef.current.value)}
          variant="outlined"
          label="Email"
          style={{ margin: 16 }}
          helperText={emailError}
          InputLabelProps={{
            shrink: true,
          }}
          error={emailError !== null}
        />

        </div>
    </div>
    <Button onClick={async e => {await saveHandler();}}
         disabled={disable}
         variant="contained"
         color="danger"
         size="large"
         className={classes.button}
         startIcon={<SaveIcon />}
        >Skapa</Button>
    </React.Fragment>);

}

export default CreateAccount;