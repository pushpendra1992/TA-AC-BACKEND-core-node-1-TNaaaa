var http = require('http');
http.createServer((req, res) => {
    res.end("Welcome to Local Server");
}).listen(4000, 'localhost');
