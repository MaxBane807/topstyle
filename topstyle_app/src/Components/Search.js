import React, { useRef } from 'react';

const Search = () => {

    let searchRef = useRef();

    const searchHandler = () => {

        
    }

    return(<React.Fragment>
        <h3>Sök produkter</h3>
        <input ref={searchRef} id="search" type="text"></input>
        <button onClick={e => {searchHandler();}}>Sök</button>
    </React.Fragment>);
}

export default Search;