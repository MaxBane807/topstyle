import React, { useContext, useState, useEffect } from 'react';
import {NavLink, Redirect,Link} from 'react-router-dom';
import UserContext from '../Contexts/User/UserContext';
import CartContext from '../Contexts/Cart/CartContext';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';




const Navigation = () => {

    const {LoggedIn,Logout} = useContext(UserContext);

    const{clearCart, nrOfItems} = useContext(CartContext);

    let [drawerOpen,setDrawerOpen] = useState(false);

    const [disable,setDisable] = useState(true);

    useEffect(() => {
        cartToggler();

    },[LoggedIn])

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawerOpen(open);
    };

    const cartToggler = () => {

        if (LoggedIn)
        {
            setDisable(false);
        }
        else
        {
            setDisable(true);
        }

    }

   

    const logoutHandler = () => {

        clearCart();
        Logout();
        
    }

    let cartlink;
    let loginToggler =  (<MenuItem component={Link} to="/Login">
                            Logga in
                        </MenuItem>);

    if (LoggedIn == true)
    {
        cartlink = 
        (<MenuItem component={Link} to="/ShoppingCart">
            Varukorg
        </MenuItem>);

        loginToggler = (<MenuItem component={"button"} onClick={e => {logoutHandler();}}>Logga ut</MenuItem>);
    }

    

    

    return(<React.Fragment>
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" onClick={toggleDrawer(true)}><MenuIcon fontSize="large"/></IconButton>
                <IconButton color="inherit" disabled={disable} component={Link} to="/ShoppingCart"><Badge badgeContent={nrOfItems}><ShoppingCartIcon fontSize="large"/></Badge></IconButton>
                <Typography variant="h1">TopStyle</Typography>
            </Toolbar>
        </AppBar>
         <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
         <div role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}>

            <MenuList>
                <MenuItem component={Link} to="/Home">
                    Hem
                </MenuItem>
                <MenuItem component={Link} to="/CreateAccount">
                    Skapa konto
                </MenuItem>
                
                {loginToggler}
                {cartlink}
            </MenuList>

            </div>
          </Drawer>
        
        
    </React.Fragment>
    );

}

export default Navigation;