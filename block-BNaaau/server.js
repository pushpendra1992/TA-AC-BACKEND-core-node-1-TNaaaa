/*
Q1. Create a basic server using http's createServer

listen for request on port 5000
console request and response object
do a request using browser on localhost:5000
check out console for request and response object

*/
var http = require('http');
http.createServer(handleRequest).listen(5000, 'localhost')

function handleRequest(req, res) {
    console.log('=================== Request ======================')
    console.log(req);
    console.log("=====================Response =================")
    console.log(res);
    res.end("Welcome to Localhost:5000");
}


/*
Q2. Create a node server

add listener on port 5100
respond with 'My first server in NodeJS' using response object.

*/

var http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.end('My first server in NodeJS');
}
server.listen(5100, 'localhost', () => {
    console.log('My first server in NodeJS');
})


/*
Q3. write code to create a node server

add listener on port 5555
console request headers
respond with content of user-agent from request headers.

*/

var http = require('http');
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    console.log(req.headers)
    res.end(req.headers["user-agent"]);
}
server.listen(5555, 'localhost', () => {
    console.log('welcome to localhost:5555');
})


/*
Q4. write code to create a node server

add listener on port 5566
console request url and request method
return a text response with requested url and method.

*/

var http = require('http');
var url = require('url')
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    console.log(req.url);
    console.log(req.method);
    res.end(`Url - ${req.url} , Method - ${req.method}`);
}
server.listen(5566, 'localhost', () => {
    console.log("Welcome to localhost:5566");
})


/*
Q5. write code to create a node server

add listener on port 7000
also add a callback function to listener with a console server listening on port 7000
return entire request headers in response.
*/

var http = require('http');
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    var output = req.headers;
    res.end(JSON.stringify(req.headers));
}
server.listen(7000, 'localhost', () => {
    console.log(`server listening on port 7000`)
})


/*
Q6. create a server

add a listener on port 3333
set status code 202 in response using res.statusCode.

*/

var http = require('http');
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    res.statusCode = 202;
    res.end('Welcome to localhost:3333');
}
server.listen(3333, 'localhost', () => {
    console.log('Welcome to localhost:3333')
})


/*
Q7. create a server

add a listener on port 8000
set appropriate header for html response using res.setHeader
return an HTML response(<h3>Welcome to altcampus</h3>)
*/

var http = require('http');
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    res.setHeader('content-type', 'text/html');
    res.end('<h3 > Welcome to altcampus </h3>');
}
server.listen(8000, 'localhost', () => {
    console.log("Welcome localhost:8000")
})


/*
Q8. Repeat above question using res.writeHead to set status code and Content-Type at the same time.

*/

var http = require('http');
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    res.writeHead(202, {
        'content-type': 'text/html'
    });
    res.end('<h3 > Welcome to altcampus </h3>');
}
server.listen(8000, 'localhost', () => {
    console.log("Welcome localhost:8000")
})

/*
Q9. create a basic node server

add a listener at port 8888
add appropriate header for json response
send json response({success: true, message: 'Welcome to Nodejs'})

*/

var http = require('http');
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    res.setHeader('content-type', 'text/json');
    res.end(JSON.stringify({
        success: true,
        message: 'Welcome to Nodejs'
    }));
}
server.listen(8888, 'localhost', () => {
    console.log('Welcome to localhost:8888');
})


/*
Q10. create a server

add listener on port 5050
use postman to do a POST request on index route
console to check request method
send HTML response i.e. <h2>posted for first time</h2>

*/

var http = require('http');
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    console.log(req.method);
    res.setHeader('content-type', 'text/html');
    res.end('<h2 > posted for first time </h2>');
}
server.listen(5050, 'localhost', () => {
    console.log('Welcome to localhost:5050');
})


/*
Q11. create a server and handle 2 different requests

add a listener on port 2345
handle GET request on '/' route where return your name in plain text in response
handle GET request on '/about' route and return your name in h2 as HTML page.
add a error handler at last to handle request made on other than above routes with a 
status code of 404.

*/

var http = require('http');
var url = require('url');
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    if (req.method == 'GET' && req.url == '/') {
        res.setHeader('content-type', 'text')
        res.end("Pushpendra Kumar");
    } else if (req.method == 'GET' && req.url == '/about') {
        res.setHeader('content-type', 'text/html')
        res.end("<h2>Pushpendra Kumar</h2>");
    } else {
        res.writeHead(404, {
            'content-type': 'text/html'
        })
        res.end('No page Found')
    }

}
server.listen(2345, 'localhost', () => {
    console.log('Welcome to localhost:2345');
})

/*
Q12. Handle 2 requests on same route with different method 1. GET on '/users' route 
where return a simple HTML form with name and email field

*/

var http = require('http');
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
    const form = `<form>
    <label>Name: 
      <input type="text" name="name" placeholder="Pushpendra Kumar">
    </label>
    <label>Email: 
      <input type="email" name="email" placeholder="kumar@mail.com">
    </label>
  </form>`;

    if (req.url == "/users" && req.method == "GET") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end(form);
    } else if (req.url == "/users" && req.method == "POST") {
        res.end("Posted for Second Time");
    } else {
        res.writeHead(400, {
            "Content-Type": "text/html"
        });
        res.end("<h2>Page Not Found</h2>");
    }
}
server.listen(2345, 'localhost', () => {
    console.log("welcome to localhost:2345");
})
