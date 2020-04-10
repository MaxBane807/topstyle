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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const ShoppingCart = () => {

    const {cart,makeOrder,removeProduct,clearCart,nrOfItems,totalprice,refreshTotal} = useContext(CartContext);

    const {User} = useContext(UserContext);

    const [render, setRender] = useState();
    const [redirect, setRedirect] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [disable, setDisabled] = useState(false);

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
        setDialogOpen(true);
    }
    
    const checkIfEmpty = () => {

        if(nrOfItems == 0)
        {
            setDisabled(true);
        }
        else
        {
            setDisabled(false);
        }
    }

    useEffect(() => {
        
        refreshTotal();
        checkIfEmpty();
        setRender({});
        

    },[removeProduct]);
    
    if (redirect == true)
    {
        return (<React.Fragment>
            
            <Redirect to="/Home"/>
        </React.Fragment>);
    }

    return(<React.Fragment>
        <Paper>
            <Typography variant="h2">Varukorg</Typography>
            <List>{list}</List>
            <Typography variant="h5">Totalt: {totalprice} kr</Typography>
            <Button disabled={disable} color="primary" onClick={e => {orderHandler();}}>Beställ</Button>
        </Paper>
        <Dialog
            open={dialogOpen}
            onClose={e => {setDialogOpen(false);}}
            >
                <DialogContent>
                     <DialogContentText>
                        Din beställning är påväg!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={(e) => {setDialogOpen(false);
                                                setRedirect(true);}
                                    } color="secondary" autoFocus>
                        Bra!
                    </Button>
                </DialogActions>
        </Dialog>
      </React.Fragment>);
}

export default ShoppingCart;