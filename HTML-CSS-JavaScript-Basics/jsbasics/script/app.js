let user = {
  name: "Ivy",
  age: "33",
  hobbies: ["Music", "Cooking", "Reading"],
  titile: "Developer",
  place: "Adelaide",
  salary: 70000,
  newTitle: {
    title: "sales",
    place: "Perth",
    salary: 90000,
  },
  greet() {
    return "Hi, my name is " + user.name + ", I am " + user.age + " years old.";
  },
};

console.log(user.greet());
