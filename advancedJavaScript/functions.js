function greetUser(greetingPrefix, userName = 'user') {
    // console.log(greetingPrefix + ' ' +  userName + '!');
    console.log(`${greetingPrefix} ${userName}!`); //similar to fstring in python
}

greetUser('Hi', 'Ivy');
greetUser('Hello');

// hardcode parameters is not flexible, can use array for more parameters
// function sumUp(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// console.log(sumUp(1, 2, 3));
// can put ... in front of an array of numbers and spread it into individuals

function sumUp(...numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number; 
    }

    return result;
}

const inputNumbers = [1,5,7,4,9];
console.log(sumUp(...inputNumbers));

// functions are objects and each function has it's own properties
console.log(sumUp);