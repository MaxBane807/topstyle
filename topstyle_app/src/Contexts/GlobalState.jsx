import React from 'react';
import ProductState from './Product/ProductState';


const GlobalState = ({children}) => {

    return (
        <ProductState>{children}</ProductState>
      );


};

export default GlobalState;