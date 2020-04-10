export const getAllProducts = async () => {


    const url = 'http://localhost:8081/products/0/';
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    return fetch(url)
    .then(response => response.json())
    .then(products => {

        return products;

    });
}

export const createUser = async user => {

    const url = 'http://localhost:8081/CreateUser/';

    console.log("nu körs anropet");

    await fetch(url,{
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }});
    
        
}

export const loginUser = async user => {

    const url = 'http://localhost:8081/login/';

    return fetch(url,{
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(result => {return result;});
}

export const getProductByID = async productID => {

    const url = 'http://localhost:8081/product/' + productID;

    return fetch(url)
    .then(response => response.json())
    .then(product => {

        return product;

    });

}

export const saveOrder = async order => {

    const url = 'http://localhost:8081/CreateOrder/';

    return fetch(url,{
        method: "POST",
        body: JSON.stringify(order),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(result => {return result;});

}

export const saveOrderProducts = async orderProduct => {

    const url = 'http://localhost:8081/RegisterOneProduct/';

    fetch(url,{
        method: "POST",
        body: JSON.stringify(orderProduct),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    .then(function(data) {
        console.log("Request success: ", "posten skapad", data);
        });
}

export const checkUsername = async username => {

    const url = 'http://localhost:8081/usernameCheck/' + username;

    return fetch(url)
            .then(response => response.json())
            .then(result => {return result});
}