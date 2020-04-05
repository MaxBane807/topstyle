import {createContext} from 'react';


const initialState = {

    allProducts: [],
    //Async här under?
    fetchProducts: () => {},
    fetchProductByID: (productID) => {},
    modifyProductsBySearch: (search) => {}
};

const ProductContext = createContext(initialState);

export default ProductContext;