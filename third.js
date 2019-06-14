//file source
var http = require('http');
var fs = require('fs');
var ol = require('/node_modules/ol')

http.createServer(function(req,res){
    fs.readFile('test.html', function(err, data){
        res.writeHead(200, {'Contend-Type': 'text/html'});
        res.write(data);
        return res.end();   
    });
}).listen(7000);