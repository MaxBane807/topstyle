import React, { useState } from 'react';
import CartContext from './CartContext';
import {saveOrder,saveOrderProducts} from '../../Api';

const CartState = ({children}) => {


    const [cart, setCart] = useState([]);
    const [nrOfItems, setNrOfItems] = useState(0);
    const [totalprice, setTotalPrice] = useState(0);

    const addProduct = (product) => {

        setCart([...cart,product]);
        setNrOfItems((prevcount) => {

            return prevcount += 1;
        });

    }

    const removeProduct = (product) => {

        let counter = 0;
        let filteredarrey = cart.filter(item => 
            { 
                if (counter == 0)
                {
                    counter += 1;
                    return (item !== product);                    
                }
                else
                {
                    return true;
                }
            });

        setCart(filteredarrey);

        setNrOfItems((prevcount) => {
            return prevcount -= 1;
        });

    }

    const clearCart = () => {

        setCart([]);
        setNrOfItems(0);
    }

    const refreshTotal = () => {

        let calctotalprice = 0;
        for (let item of cart)
        {
            calctotalprice += item.Price;
        }
        setTotalPrice(calctotalprice);
    }

    const makeOrder = async customerID => {

        //orderDate
        let today = new Date();
        let orderdate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        //Totalprice

        

        let orderID = await saveOrder({customerID,orderdate,totalprice});
        let localcart = cart;
        orderID = parseInt(orderID);
        while (localcart.length > 0)
        {
            
            let productID = localcart[0].ProductID;
            productID = parseInt(productID);
            let removeIndexes = [];
            let amount = localcart.reduce((total,item,currIndex) => {

                if (item.ProductID == productID)
                {                   
                    removeIndexes.unshift(currIndex);
                    return total += 1;
                }
                else 
                {
                    return total;
                }
            },0);

            console.log(orderID,productID,amount);
            await saveOrderProducts({orderID,productID,amount});
            
            for (let index of removeIndexes)
            {
                localcart.splice(index,1);
            }
        }
             
    }

    return (<CartContext.Provider value={{
        cart,
        addProduct,
        clearCart,
        makeOrder,
        removeProduct,
        nrOfItems,
        totalprice,
        refreshTotal}}>
        {children}
    </CartContext.Provider>);


}
export default CartState;