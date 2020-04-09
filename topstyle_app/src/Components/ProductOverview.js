import React from 'react';
import { NavLink, useRouteMatch, Switch, Route,Link as RouterLink} from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});



const ProductOverview = ({Product, Match}) => {
    const classes = useStyles();  

    return (<Card className={classes.root}>
        <CardActionArea>
            <CardMedia className={classes.media} image="https://source.unsplash.com/random"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{Product.Name} {Product.Price} kr</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button color="primary" component={RouterLink} to={`/Home/${Product.ProductID}`}>Se mer</Button>
        </CardActions>  
    </Card>);

}

export default ProductOverview;