var http = require('http');
var server = http.createServer(responseHandler);

function responseHandler(req, res) {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/html');
    if (req.method == 'GET' && req.url == '/')
        res.end('<h2>Welcome to Index Page with GET method</h2>');
    else if (req.method == 'GET' && req.url == '/about')
        res.end(`<h2>Welcome to About Page with GET method</h2>`);
    else if (req.method == 'POST' && req.url == '/about')
        res.end(`<h2>Welcome to About Page with POST method</h2>`);
    else if (req.method == 'POST' && req.url == '/')
        res.end(`<h2>Welcome to Index Page with POST method</h2>`);
    else {
        res.statusCode = 404;
        res.end(`<h1>Page not found</h1>`);
    }
}

server.listen(4444, 'localhost', () => {
    console.log('server listining at port localhost:4444');
})
