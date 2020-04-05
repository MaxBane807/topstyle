import React,{useState,useContext,useReducer, useEffect} from 'react';
import {getAllProducts, getProductByID} from '../../Api';
import ProductContext from "./ProductContext";
import ProductReducer, { updateProducts, modifyProducts } from "./ProductReducer";


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

    const modifyProductsBySearch = async search => {

        await fetchProducts();
        dispatch({
            type:modifyProducts,
            payload:search
        });
    }

    const fetchProductByID = async productID => {

        return await getProductByID(productID);
    }

    useEffect(() => {
        fetchProducts();
    }, []);



    return (<ProductContext.Provider value={{
        allProducts:productState.allProducts, 
        fetchProducts,
        fetchProductByID,
        modifyProductsBySearch}}>
        {children}
    </ProductContext.Provider>);
};
export default ProductState;