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

    fetch(url,{
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }})
    .then(function(data) {
        console.log("Request success: ", "posten skapad", data);
        });
        
}