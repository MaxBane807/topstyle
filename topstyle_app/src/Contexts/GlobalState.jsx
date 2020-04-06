import React from 'react';
import ProductState from './Product/ProductState';
import UserState from './User/UserState';
import CartState from './Cart/CartState';


const GlobalState = ({children}) => {

    return (
        <ProductState>
            <UserState>
                <CartState>
                    {children}
                </CartState>
            </UserState>
        </ProductState>
      );


};

export default GlobalState;