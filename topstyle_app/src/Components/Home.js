import React,{useContext, useState, useEffect} from 'react';
import ProductContext from '../Contexts/Product/ProductContext';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductOverview from './ProductOverview';
import Search from './Search';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));


const Home = () => {

    const {allProducts, fetchProducts, modifyProductsBySearch} = useContext(ProductContext);

    const [renderState, setRender] = useState();

    const classes = useStyles();
   
    useEffect(() => {

        setRender({});

    },[allProducts,modifyProductsBySearch]);
    


    let match = useRouteMatch();

    if (!allProducts){
        return(<h1>Loading...</h1>)
    } 

    

    let list = allProducts.map(item => {

        return(<Grid item xs={5}><ProductOverview Product={item}/></Grid>);
    });


    return(<React.Fragment>
        
        
        <Switch>
            <Route path={`/Home/:ProductID`}><ProductDetails/></Route>
            <Route path={'/Home'}>
                <Typography variant="h2">Välkommen till TopStyle!</Typography>
                <Search/>
                <Grid container spacing={4}>{list}</Grid>
            </Route>
        </Switch>
    </React.Fragment>);

    

}

export default Home;