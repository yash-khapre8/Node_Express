// ASSIGNEMT 1

// Print Hello from Node.js

console.log("Hello from Node.js");

// ASSIGNMENT 2
// Create a add subtract calculator, publish it and import in other node app

calculator.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// export the functions
module.exports = {
    add,
    subtract,
};

// Commands:
// publish the module to npm registry
// npm publish --access public
// change minor version and republish
// npm version minor
// npm publish --access public

// install the module in another project
// npm install day1_demo2
// package url: https://www.npmjs.com/package/@armaanm08/calSSIGNMENT

// use the module in another project
// const calc = require('@yashkhapre/calculatorassignment');
// console.log(calc.add(2, 3)); // 5
// console.log(calc.subtract(5, 2)); // 3




// ASSIGNMENT 3:

// FS(File System Module Usage)

// Pre requisite steps:

// 1. create a file input.txt and read its content - sync and async both

// synchronous read
const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf8');
console.log('Synchronous read:');
console.log(data);

// asynchronous read
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Asynchronous read:');
    console.log(data);
});

// 2. rename the file input.txt to data.txt - sync and async both

// synchronous rename
try {
    fs.renameSync('input.txt', 'data.txt');
    console.log('File renamed synchronously');
} catch (err) {
    console.error(err);
}

// asynchronous rename
fs.rename('data.txt', 'input.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File renamed asynchronously');
});

// ASSIGNMENT 4: 

// HTTP SERVER CREATION

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

// add a request url of "/" which should send a response of "Hello world"

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!\n');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found\n');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});



// ASSIGNMENT 5:

// OS Module Usage

const os = require('os');

console.log('Architecture:', os.arch());
console.log('Platform:', os.platform());
console.log('Number of CPU cores:', os.cpus().length);
console.log('CPU Info:', os.cpus());
console.log('System Uptime (seconds):', os.uptime());



// ASSIGNMENT 6: 

// Stream Usage Demonstration

const fs = require('fs');

const readStream = fs.createReadStream('bigfile.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
    console.log('Finished reading the file.');
});

readStream.on('error', (err) => {
    console.error('Error reading the file:', err);
});

// writing to a file named documentation.txt using write stream

const fs = require('fs');

const writeStream = fs.createWriteStream('documentation.txt', { encoding: 'utf8' });

writeStream.write('This is the first line of the documentation.\n');
writeStream.write('This is the second line of the documentation.\n');
writeStream.end('This is the last line of the documentation.\n');

writeStream.on('finish', () => {
    console.log('Finished writing to the file.');
});

writeStream.on('error', (err) => {
    console.error('Error writing to the file:', err);
});