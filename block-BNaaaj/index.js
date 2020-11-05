// Q. Write code to run index.js with content console.log('Welcome to Nodejs') in node environment ?

console.log("welcome to Node.js");

/* Q. In above index.js file
    require os module
    write code to get number of cpu's, free memory, uptime and version from os module
    write code to require only readFile and unlink method from fs module. */

let os = require("os");
const cpu = os.cpus();
const freeMem = os.freemem();
const upTime = os.uptime();
const osVersion = os.version();
console.log(cpu);
console.log(freeMem);
console.log(upTime);
console.log(osVersion);

/* Q. Create 2 files
- area.js
- app.js
- In area.js write functions to calculate area of square, rectangle and circle and export them using module.exports
- In app.js, require functions from area.js and execute the areas of given figures and console.log the results. */

console.log(`area.js and app.js created and linked with module.exports and require function`);

/* Q. Write 2 different methods for creating buffer in nodejs using Buffer class.
- create a fixed length buffer of 12.
- write code to convert buffer back to string. */

let buff1 = Buffer.alloc(12);
buff1.write("Welcome to Buffer 01");
console.log(buff1);
console.log(buff1.toString());

let buff2 = Buffer.allocUnsafe(12);
console.log(buff2);

// Q. Write code example to demonstrate blocking and non-blocking code.

// Blocking Code

console.log(`First`);
console.time(`task`)
for (let index = 0; index <= 1000000000000000; index++) {

    if (index = 1000000000000000)
        console.log(`Second`);
    else
        continue;
}
console.timeEnd(`task`);
console.log(`Third`);

// Non-Blocking Code

console.log(`First`);
const fs = require('fs');
console.time('task1')
fs.readFile('./area.js', 'utf8', (err, data) => {
    if (err)
        throw err
    else {
        console.log(`Second`)
        console.timeEnd('task1');
    }
})
console.log('Third');

/* Q. In server.js
-require parse method from url core node module.
-parse https://airindia.com/fares/calculate?from=delhi&to=detroitand store parsed value in varaible named parsedUrl.
-console query string from parsed url
-console pathname
-console protocol
-use parse method from url module to parse query string as well. */

console.log(`Server.js created`);
