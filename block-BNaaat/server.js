var fs = require('fs');
var http = require('http');
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    if (req.method == 'GET' && req.url == '/file') {
        res.setHeader('Content-Type', 'text/html')
        fs.readFile('./node.html', (err, data) => {
            if (err)
                throw err;
            res.end(data);
        })
    } else if (req.method == 'GET' && req.url == '/stream') {
        res.setHeader('Content-Type', 'text/html')
        fs.createReadStream('./node.html').pipe(res);
    } else if (req.method == 'GET' && req.url == '/')
        res.end('make request with "/file" or "/stream".');
    else
        res.end('Page Not Found')


}
server.listen(5555, 'localhost', () => {
    console.log('localhost:5555');
})
