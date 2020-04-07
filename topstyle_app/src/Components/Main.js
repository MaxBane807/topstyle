import React from 'react';
import {Switch,Route, useRouteMatch} from 'react-router-dom';
import Home from './Home';
import CreateAccount from './CreateAccount';
import Login from './Login';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';
import Container from '@material-ui/core/Container';


const Main = () => {

    let match = useRouteMatch();

    return(
    <Container maxWidth="md">
        <Switch>
            <Route path="/Home" component={Home}/>
            <Route path="/CreateAccount" component={CreateAccount}/>
            <Route path="/Login" component={Login}/>
            <Route path="/ShoppingCart" component={ShoppingCart}/>
            <Route exact path="/" component={Home} />
        </Switch>
    </Container>
    );

}

export default Main;