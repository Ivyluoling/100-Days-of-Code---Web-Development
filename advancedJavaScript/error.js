// Error handling

const fs = require('fs');

function readFile() {
    try {
        const fileData = fs.readFileSync('data.json');
    } catch {
        console.log('An error occured!');
    } finally { // Finally is optional, code execute regardless of an error occur or not
        console.log('Hi there!');
    }
    console.log('Hi there!');
}

readFile();

// module.exports = {
//     readFile: readFile
// }
// this scope only exists in Node.js

// block scoping is that you can only access variables inside of that block