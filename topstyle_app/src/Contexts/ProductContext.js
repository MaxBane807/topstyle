import React,{useState,useContext} from 'react';

export const ProductContext = React.createContext();


const productContextProvider = (props) => {

    const initialstate = {}

    const [products,changeProducts] = useState(initialstate);

    return (<ProductContext.Provider value={allProducts}>


    </ProductContext.Provider>)

}