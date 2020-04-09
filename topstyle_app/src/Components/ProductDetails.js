import React, {useContext, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from '../Contexts/Product/ProductContext';
import CartContext from '../Contexts/Cart/CartContext';
import UserContext from '../Contexts/User/UserContext';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const ProductDetails = () => {

    let {ProductID} = useParams();

    const{fetchProductByID} = useContext(ProductContext);

    const{addProduct} = useContext(CartContext);

    const{LoggedIn} = useContext(UserContext);

    const [product, setProduct] = useState();

    useEffect(() => {
        
        let isMounted = true;
        (async () => {
          if (isMounted){
            setProduct(await fetchProductByID(ProductID));
          }
        })();

        return () => {isMounted = false};
      }, []);

    if (!product) {
      return <div>Loading...</div>;
    }

    let materialList = product.map((x) => {

        let item = [];
        for (let y = 0; y < x.MaterialDescription.length; y++)
        {
          let post = x.MaterialDescription[y] + " " + (x.Percentage[y] * 100) + "%";
          item.push(<li>{post}</li>);
        }
        return item;
    });

    let showInStock;

    if (product[0].InStock == 1)
    {
      showInStock = "Ja";
    }
    else
    {
      showInStock = "Nej";
    }

    const reserveHandler = () => {

      addProduct(product[0]);

    }

    let cartRelation;

    if (LoggedIn)
    {
      cartRelation = (<button onClick={e => {reserveHandler();}}>Lägg till i varukorgen</button>);
    }
    else
    {
      cartRelation = (<h5>Logga in för att köpa!</h5>);
    }

    return(<Paper>
    <Typography variant="h3">{product[0].Name}</Typography>
    <Typography variant="subtitle1">Kategori: {product[0].Description[1]}</Typography>
    <Typography variant="body1">{product[0].Description[0]}</Typography>
    <ul>{materialList[0]}</ul>
    <p>I lager: {showInStock}</p>
    <h4>Pris: {product[0].Price}</h4>
    {cartRelation}
    </Paper>);

}

export default ProductDetails;