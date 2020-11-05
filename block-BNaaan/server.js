var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    console.log(`Headers - ${req.headers}`);
    console.log(`Method - ${req.method}`);
    console.log(`URL - ${req.url}`);
    res.end("Welcome to Localhost");


}

server.listen(3000, () => {
    console.log(`Server listening on port 3000`);
})
