import React,{useContext, useState, useEffect} from 'react';
import ProductContext from '../Contexts/Product/ProductContext';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductOverview from './ProductOverview';
//Lägg varukorgskomponenten här i.
const Home = () => {

    const {allProducts, fetchProducts} = useContext(ProductContext);

    const [products, setProducts] = useState(allProducts);

   

    useEffect(() => {

        setProducts(allProducts);

    }, [allProducts]);

    let match = useRouteMatch();

    if (!products){
        return(<h1>Loading...</h1>)
    } 

    let list = products.map(item => {

        return(<li><ProductOverview Product={item}/></li>);
    });

       


    return(<React.Fragment>
        <h1>Välkommen till TopStyle!</h1>
        
        <Switch>
            <Route path={`${match.path}/:ProductID`}><ProductDetails/></Route>
            <Route path={match.path}><ul>{list}</ul></Route>
        </Switch>
    </React.Fragment>);

    

}

export default Home;