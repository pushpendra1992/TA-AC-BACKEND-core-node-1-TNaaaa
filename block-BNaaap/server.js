var http = require('http');
var server = http.createServer(responseHandler);

function responseHandler(req, res) {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/html');
    if (req.method == 'GET')
        res.end('<h1>req method is GET</h1>');
    else
        res.end("Other than GET method");
}

server.listen(4444, 'localhost', () => {
    console.log('server listining at port localhost:4444');
})
