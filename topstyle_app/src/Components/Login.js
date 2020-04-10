import React, { useRef, useContext, useState, useEffect } from 'react';
import UserContext from '../Contexts/User/UserContext';
import {Redirect} from 'react-router-dom'
import { Typography } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Grid from '@material-ui/core/Grid';


const Login = () => {

    let usernameRef = useRef();
    let passwordRef = useRef();

    const {Login} = useContext(UserContext);

    const [redirect, setRedirect] = useState(false);

    const [render, setRender] = useState();
    const [trylogin, setTryLogin] = useState(false);  

    const loginHandler = async () => {

        let loginAtempt = await Login(usernameRef.current.value,passwordRef.current.value);
        if (loginAtempt)
        {
            
            setRedirect(true);
        }
        else
        {
            
            setTryLogin(true);
        }

    }

    useEffect(() => {
        setRender({});
    },[trylogin]);

    if (redirect)
    {
        return(<Redirect to="/Home"/>);
    }

    let failedLogin;

    if(trylogin)
    {
        failedLogin = (<Typography variant="body1">Felaktigt användarnamn eller lösenord</Typography>);
    }
    else
    {
         failedLogin = (<p></p>);
    }
    
    return (<React.Fragment>
    
        <Typography variant="h2">Logga in</Typography>
        <Grid container alignItems="center">
        
        <Grid item>
            <TextField 
            required
            inputRef={usernameRef}
            variant="outlined"
            label="Användarnamn"
            style={{ margin: 16 }}
            InputLabelProps={{
                shrink: true,
            }}
            />
        </Grid>

        <Grid item>
            <TextField 
            required
            inputRef={passwordRef}
            variant="outlined"
            label="Lösenord"
            style={{ margin: 16 }}
            InputLabelProps={{
                shrink: true,
            }}
            type="password"
            />
        </Grid>

        <Button color="secondary" variant="contained" startIcon={<LockOpenIcon/>} onClick={async e => {await loginHandler();}}>Logga in</Button>

        
    </Grid>
    {failedLogin}
    </React.Fragment>);

}

export default Login;