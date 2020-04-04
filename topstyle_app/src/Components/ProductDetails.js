import React, {useContext, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from '../Contexts/Product/ProductContext';

const ProductDetails = () => {

    let {ProductID} = useParams();

    const{fetchProductByID} = useContext(ProductContext);

    const [product, setProduct] = useState();

    useEffect(() => {
        (async () => {
          setProduct(await fetchProductByID(ProductID));
        })();
      }, [product]);

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

    return(<React.Fragment>
    <h1>{product[0].Name}</h1>
    <h3>Kategori: {product[0].Description[1]}</h3>
    <p>{product[0].Description[0]}</p>
    <ul>{materialList[0]}</ul>
    <p>I lager: {showInStock}</p>
    <h4>Pris: {product[0].Price}</h4>

    </React.Fragment>);

}

export default ProductDetails;