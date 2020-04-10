import React, {useContext, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from '../Contexts/Product/ProductContext';
import CartContext from '../Contexts/Cart/CartContext';
import UserContext from '../Contexts/User/UserContext';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';
import { grey } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
  marginAutoItem: {
    margin: 'auto'
  }
});


const ProductDetails = () => {

    const classes = useStyles();

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
      cartRelation = (<Button startIcon={<ShoppingCartIcon/>} color="secondary" onClick={e => {reserveHandler();}}>Lägg till i varukorgen</Button>);
    }
    else
    {
      cartRelation = (<Typography variant="h5">Logga in för att köpa!</Typography>);
    }

    let background = {

      backgroundColor: 'gray',
      height: '500px',
      width: '900px'
    };
   //Kör ett stort card med focus

    return(
      <div className={classes.marginAutoItem}>
        
        <Card>
          <CardActionArea>
          <CardMedia className={classes.media} image="https://source.unsplash.com/random"/>
            <CardContent>
              <Typography variant="h4">{product[0].Name}</Typography>
              <Typography variant="subtitle1">Kategori: {product[0].Description[1]}</Typography>
              <Typography variant="body1">{product[0].Description[0]}</Typography>
              <ul>{materialList[0]}</ul>
              <Typography variant="body1">I lager: {showInStock}</Typography>
              <Typography variant="h5">Pris: {product[0].Price}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {cartRelation}
          </CardActions>
        </Card>
        
    </div>
    );

}

export default ProductDetails;