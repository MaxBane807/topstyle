import React,{UseState,CreateContext} from './node_modules/react';

export const ProductContext = React.createContext();


const productContextProvider = (props) => {

    const initialstate = {}

    return (<ProductContext.Provider value={allProducts}>


    </ProductContext.Provider>)

}