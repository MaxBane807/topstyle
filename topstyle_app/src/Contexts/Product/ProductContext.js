import {createContext} from 'react';


const initialState = {

    allProducts: [],
    fetchProducts: () => {}

};

const ProductContext = createContext(initialState);

export default ProductContext;