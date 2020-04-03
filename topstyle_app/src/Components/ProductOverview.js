import React from 'react';
import { NavLink, useRouteMatch, Switch, Route} from 'react-router-dom';
import ProductDetails from './ProductDetails';


const ProductOverview = ({Product}) => {

   
    let Match = useRouteMatch();

    return (<React.Fragment>
        
    <h3>{Product.Name}</h3>
    <h3>{Product.Price} kr</h3>
        <NavLink to={`${Match.url}/${Product.ProductID}`}>Se mer</NavLink>
        
    </React.Fragment>);

}

export default ProductOverview;