import React, { useRef, useContext } from 'react';
import ProductContext from '../Contexts/Product/ProductContext';

const Search = () => {

    let searchRef = useRef();

    const{modifyProductsBySearch, allProducts} = useContext(ProductContext);

    const searchHandler = () => {

        modifyProductsBySearch(searchRef.current.value);
    }

    return(<React.Fragment>
        <h3>Sök produkter</h3>
        <input ref={searchRef} id="search" type="text"></input>
        <button onClick={e => {searchHandler();}}>Sök</button>
    </React.Fragment>);
}

export default Search;