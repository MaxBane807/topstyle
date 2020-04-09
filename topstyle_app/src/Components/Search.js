import React, { useRef, useContext } from 'react';
import ProductContext from '../Contexts/Product/ProductContext';
import { Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const Search = () => {

    let searchRef = useRef();

    const{modifyProductsBySearch, allProducts} = useContext(ProductContext);

    const searchHandler = () => {

        modifyProductsBySearch(searchRef.current.value);
    }

    

    return(<React.Fragment>
        
        <TextField 
            type="text" 
            inputRef={searchRef} 
            variant="outlined"
            label="Sök produkter"
            style={{ margin: 16 }}
            InputLabelProps={{shrink: true}}
        />

        <Button 
            onClick={e => {searchHandler();}} 
            variant="contained"
            size="large"
            color="secondary"
            startIcon={<SearchIcon/>}>Sök</Button>

    </React.Fragment>);
}

export default Search;