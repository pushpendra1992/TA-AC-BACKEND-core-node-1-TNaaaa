console.log(`Welcome to Node.js`)

function sum() {
    let add = 0;
    for (let i = 1; i <= 10; i++) {
        add += i;
    }
    return add;
}
let x = sum();
console.log(x);

//========== terminal ===============//

// cd node (folder containing js file)
// node index.js (file name)
