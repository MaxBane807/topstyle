import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Home';
import CreateAccount from './CreateAccount';


const Main = () => {

    return(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/CreateAccount" component={CreateAccount}/>
    </Switch>
    );

}

export default Main;