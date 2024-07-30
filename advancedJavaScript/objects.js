// const job =  {
//     title: 'Developer',
//     location: 'New York',
//     salary: 50000,
// };

// console.log(new Date().toISOString()); // to get a timestamp
// // toISOString() convert a Date object into ISO 8601 extended format
// // return value in format: YYYY-MM-DDTHH:mm:ss.sssZ

//create a job blueprint to increase flexibility and maintainability

class Job {
    constructor(jobTitle, location, salary) {
        this.title = jobTitle;
        this.location = location;
        this.salary = salary;
    }

    describe() {
        console.log(`I am a ${this.title}, i work in ${this.location} and I earn ${this.salary}.`)
    } // `` works similar to f'' in Python
}

const developer = new Job('Developer', 'New York', 50000);
const cook = new Job('Cook', 'Munich', 35000);

console.log(developer);
developer.describe();

console.log(cook);
cook.describe();

const {title, location} = developer; // to get values from a object, same logic applied to arrays

console.log(title, location);
