import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    let {ProductID} = useParams();
    return(
    <h1>Hej Hopp</h1>);

}

export default ProductDetails;