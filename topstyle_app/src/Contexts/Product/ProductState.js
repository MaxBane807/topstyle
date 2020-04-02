import React,{useState,useContext,useReducer, useEffect} from 'react';
import {getAllProducts} from '../../Api';
import ProductContext from "./ProductContext";
import ProductReducer, { updateProducts } from "./ProductReducer";


const ProductState = ({children}) => {

    const [productState, dispatch] = useReducer(ProductReducer, {
        allProducts: []
      });

    const fetchProducts = async () => {
    
        dispatch({
            type:updateProducts,
            payload: await getAllProducts()
        });    
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (<ProductContext.Provider value={{
        allProducts:productState.allProducts, 
        fetchProducts}}>
        {children}
    </ProductContext.Provider>);
};
export default ProductState;