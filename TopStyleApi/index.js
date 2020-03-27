
var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var getlogic = require('./logic/getlogic');




// Start server and listen on http://localhost:8081/
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
}); 

app.get('/products/:typeId/', async function (req, res) {
    await sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.input('TypeID', req.params.typeId);
        request.execute('GetProductsByType', function(err, recordsets, returnValue, affected) {
            if(err) console.log(err);
            
            //Sorting data
            let answer = getlogic.sortProducts(recordsets.recordset);

            res.send(JSON.stringify(answer)); // Result in JSON format
        });
    });
})