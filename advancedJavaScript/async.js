// built-in feature - promises to handle async tasks
// allow us to handle multiple async tasks in a clearly structured way

const fs = require("fs/promises");

// function readFile() {
//   let fileData;
//   // fileData = fs.readFileSync('data.txt');
//   // sometimes reading files can take long, get rid of Sync to use asyn feature
//   // so that other lines can be executed first while waiting

//   // callback
//   // cannot use try and catch in callback
//   // use if (error) {} to check errors in callback

//   // fs.readFile('data.txt', function(error, fileData) {
//   // if (error) {
//   //
//   // }
//   //     console.log('File parsing done!');
//   //     console.log(fileData.toString());

//   //     // start another async task that sends the data to a database
//   // });

//   //promises - use catch to handle errors

//   fs.readFile("data.txt")
//     .then(function (fileData) {
//       console.log("File parsing done!");
//       console.log(fileData.toString());

//       return anotherAsyncTask();
//     })
//     .then(function () {})
//     .catch(function(error) {
//         console.log(error);
//     });
    

//   // with return and then() structure we can handle multiple async tasks
//   // and solve "callback hell"

//   console.log("Hi there!");
// }


// add async in front of function and change it to a promise
// add await inside an async function to pause the function
// until a promise is resolved or rejected
// which means it won't execute the lines after the promise function
// to handle error, we can use try and catch to circle the await part


async function readFile() {
    let fileData;
    
    try {
        fileData = await fs.readFile('data.txt')
    } catch (error) {
        console.log(error);
    }
    
    console.log(fileData.toString());

    console.log('Hi there');
}

readFile();



