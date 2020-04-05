import React,{useContext, useState, useEffect} from 'react';
import ProductContext from '../Contexts/Product/ProductContext';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductOverview from './ProductOverview';
import Search from './Search';
//Lägg varukorgskomponenten här i.
const Home = () => {

    const {allProducts, fetchProducts, modifyProductsBySearch} = useContext(ProductContext);

    const [renderState, setRender] = useState();

   
    useEffect(() => {

        setRender({});

    },[allProducts,modifyProductsBySearch]);
    


    let match = useRouteMatch();

    if (!allProducts){
        return(<h1>Loading...</h1>)
    } 

    

    let list = allProducts.map(item => {

        return(<li><ProductOverview Product={item}/></li>);
    });


    return(<React.Fragment>
        <h1>Välkommen till TopStyle!</h1>
        
        <Switch>
            <Route path={`${match.path}/:ProductID`}><ProductDetails/></Route>
            <Route path={match.path}>
                <Search/>
                <ul>{list}</ul>
            </Route>
        </Switch>
    </React.Fragment>);

    

}

export default Home;