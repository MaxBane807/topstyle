import React from 'react';
import ProductState from './Product/ProductState';
import UserState from './User/UserState';


const GlobalState = ({children}) => {

    return (
        <ProductState>
            <UserState>
            {children}
            </UserState>
          </ProductState>
      );


};

export default GlobalState;