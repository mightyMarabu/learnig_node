var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Contend-Type': 'text/html'});
    res.write("The date and time are currently: " +dt.myDateTime())
    res.end(' Hello World!');
}).listen(7000);