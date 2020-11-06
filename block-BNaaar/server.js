
var http = require('http');
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    var url = require('url');
    var parsedUrl = url.parse(req.url);
    var pathname = parsedUrl.pathname;

    if (req.method == 'GET' && pathname == '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to home page;')
    } else if (req.method == 'GET' && pathname == '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.end('this is all about NodeJS');
    } else if (req.method == 'POST' && pathname == '/about') {
        res.setHeader('Content-Type', 'text/json')
        res.end('message:this is a post request');
    } else
        res.end('Page Not Found')
}
server.listen(5000, 'localhost', () => {
    console.log("Server listening at localhost:5000");
})
