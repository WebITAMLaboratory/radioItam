var http = require('http');
var fs = require('fs');

var html = fs.readFileSync('dist/index.html');

http.createServer(function (req, res) {
    res.end(html);
}).listen(8000);