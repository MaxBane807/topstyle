
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var getlogic = require('./logic/getlogic');
var ignoreData = require('./ignoreMisc/ignore');

var sqlConfig = ignoreData.sqlSettings;


// Start server and listen on http://localhost:8081/
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
}); 

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.json());
app.use(express.urlencoded());

app.get('/products/:typeId/', async function (req, res) {
    await sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.input('TypeID', req.params.typeId);
        request.execute('GetProductsByType', function(err, recordsets, returnValue, affected) {
            if(err) console.log(err);
            
            //Sortera data
            let answer = getlogic.sortProducts(recordsets.recordset);        
            res.send(JSON.stringify(answer)); // Result in JSON format
        });
    });
})

app.get('/product/:productId/', async function (req, res) {
    await sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.input('ProductID', req.params.productId);
        request.execute('GetProductByID', function(err, recordsets, returnValue, affected) {
            if(err) console.log(err);
            
            //Sortera data
            let answer = getlogic.sortProducts(recordsets.recordset);        
            res.send(JSON.stringify(answer)); // Result in JSON format
        });
    });
})

app.post('/login', async function (req, res, next) {
    await sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.input('UserName', req.body.username);
        request.execute('GetCustomerByUserName', function(err, recordsets, returnValue, affected) {
            if(err) console.log(err);
            
            if (recordsets.recordset.length === 1)
            {
                if(recordsets.recordset[0].Password === req.body.password)
                {
                    res.send(JSON.stringify(recordsets.recordset[0]));
                }
                else
                {
                    res.send(JSON.stringify(false));
                }
            }
            else{
                res.send(JSON.stringify(false));
            }
        });
    });
})

app.post('/CreateUser', async function (req, res, next){
    await sql.connect(sqlConfig, function(){
        var request = new sql.Request();
        request.input('UserName',req.body.username);
        request.input('Password', req.body.password);
        request.input('FirstName',req.body.firstname);
        request.input('LastName',req.body.lastname);
        request.input('Phone',req.body.phone);
        request.input('Email', req.body.email);
        request.execute('InsertOrUpdateCustomer',function(err,recordsets,returnValue,affected){
            if (err) console.log(err);

        });

    });

})

app.post('/CreateOrder', async function (req, res, next){
    await sql.connect(sqlConfig, function(){
        var request = new sql.Request();
        request.input('CustomerID',req.body.customerID);
        request.input('OrderDate', req.body.orderdate);
        request.input('TotalPrice',req.body.totalprice);       
        request.execute('InsertOrUpdateOrder',function(err,recordsets,returnValue,affected){
            if (err) console.log(err);
            console.log(recordsets.recordset[0].InsertedOrder);
            res.send(JSON.stringify(recordsets.recordset[0].InsertedOrder));
        });

    });

})

app.post('/RegisterOneProduct', async function (req, res, next){
    await sql.connect(sqlConfig, function(){
        var request = new sql.Request();
        request.input('OrderID',req.body.orderID);
        request.input('ProductID', req.body.productID);
        request.input('Amount',req.body.amount);
        request.execute('InsertOrderProduct',function(err,recordsets,returnValue,affected){
            if (err) console.log(err);
        });

    });

})

