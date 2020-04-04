import {createContext} from 'react';


const initialState = {

    allProducts: [],
    fetchProducts: () => {},
    fetchProductByID: (productID) => {},
    modifyProductsBySearch: (search) => {}
};

const ProductContext = createContext(initialState);

export default ProductContext;