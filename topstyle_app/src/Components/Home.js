import React,{useContext, useState, useEffect} from 'react';
import Products from './Products';
import ProductContext from '../Contexts/Product/ProductContext';
//Lägg varukorgskomponenten här i.
const Home = () => {

    const {allProducts, fetchProducts} = useContext(ProductContext);

    const [products, setProducts] = useState(allProducts);

    useEffect(() => {

        setProducts(allProducts);

    }, [allProducts]);

    if (!products){
        return(<h1>Loading...</h1>)
    }

    return(
    <React.Fragment>
    <h1>Välkommen till TopStyle!</h1>
    <Products products={products}/>  
    </React.Fragment>
    );

}

export default Home;