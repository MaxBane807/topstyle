import React from 'react';
import ProductState from './Product/ProductState';
import UserState from './User/UserState';
import CartState from './Cart/CartState';


const GlobalState = ({children}) => {

    return (
        <ProductState>
            <CartState>
                <UserState>
                    {children}
                </UserState>
            </CartState>
        </ProductState>
      );


};

export default GlobalState;