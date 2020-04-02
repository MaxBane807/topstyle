import React,{useContext, useEffect} from "react";
import {ProductContext} from '../Contexts/Product/ProductContext';


const Products = ({products}) => {

    
    
    

        let list = products.map(item => {

            return(<li>{item.Name}</li>);
            });
    return(<React.Fragment>
        <ul>{list}</ul>
    </React.Fragment>);

    
}

export default Products;