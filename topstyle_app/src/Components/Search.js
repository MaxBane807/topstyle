import React, { useRef, useContext } from 'react';
import ProductContext from '../Contexts/Product/ProductContext';
import { Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Search = () => {

    let searchRef = useRef();

    const{modifyProductsBySearch, allProducts} = useContext(ProductContext);

    const searchHandler = () => {

        modifyProductsBySearch(searchRef.current.value);
    }

    

    return(<Grid container alignItems="center">
        
        <Grid item>
        <TextField 
            type="text" 
            inputRef={searchRef} 
            variant="outlined"
            label="Sök produkter"
            style={{ margin: 16 }}
            InputLabelProps={{shrink: true}}
        />

        </Grid>

        <Grid item>
        <Button 
            onClick={e => {searchHandler();}} 
            variant="contained"
            size="large"
            color="secondary"
            startIcon={<SearchIcon/>}>Sök</Button>
        </Grid>
    </Grid>);
}

export default Search;