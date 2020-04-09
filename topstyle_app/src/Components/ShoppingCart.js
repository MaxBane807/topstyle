import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../Contexts/Cart/CartContext';
import UserContext from '../Contexts/User/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Redirect} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { Typography } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';

const ShoppingCart = () => {

    const {cart,makeOrder,removeProduct,clearCart} = useContext(CartContext);

    const {User} = useContext(UserContext);

    const [render, setRender] = useState();
    const [redirect, setRedirect] = useState(false);

    let list = cart.map((x) => {

    return (<ListItem>
                <ListItemText primary={`${x.Name} Pris: ${x.Price} kr`}/>
                
                <ListItemSecondaryAction>
                    <IconButton onClick={e => {removeProduct(x);}} edge="end" aria-label="Ta bort">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
                    
            </ListItem>);
    });

    const orderHandler = async () => {

        await makeOrder(User.CustomerID);
        clearCart();
        setRedirect(true);
    }

    useEffect(() => {
        setRender({});
    },[removeProduct]);
    
    if (redirect == true)
    {
        return (<Redirect to="/Home"/>);
    }

    return(<Paper>
            <Typography variant="h2">Varukorg</Typography>
            <List>{list}</List>
            <Button color="primary" onClick={e => {orderHandler();}}>Beställ</Button>
        </Paper>);
}

export default ShoppingCart;