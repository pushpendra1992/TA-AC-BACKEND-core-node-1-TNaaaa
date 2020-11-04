// Non Blocked =====================
var fs = require('fs');

fs.readFile('./content.md', (err, file) => {
    console.log(`should print on top`);
    console.log(file.toString())

})
console.log(`execute first`);
console.log(`execute last`);

// Blocked Code =====================

console.log(`print on top`);
console.time('task');
for (let index = 0; index < 1000000; index++) {
    // task

}
console.timeEnd('task');
console.log(`print last`);

// Buffer ============================

var buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write("welcome to Buffer");
console.log(buff1.toString());
