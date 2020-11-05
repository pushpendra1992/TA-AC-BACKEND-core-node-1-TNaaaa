const url = require('url');
let urlString = "https://airindia.com/fares/calculate?from=delhi&to=detroitand";
let parsedUrl = url.parse(urlString);
console.log(parsedUrl);
console.log(parsedUrl.query);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);

const querystring = require('querystring');
let que = parsedUrl.query;
console.log(querystring.parse(que));
