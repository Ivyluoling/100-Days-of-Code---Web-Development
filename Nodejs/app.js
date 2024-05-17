const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false })); //set up a body parser to handle form data

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); //localhost:3000/currenttime

app.get("/", function (req, res) {
  //(req, res)
  res.send(
    '<form action="/store-user" method="post"><label>Your Name: </label><input type="text" name="username"><button>Submit</button></form>'
  );
}); //localhost:3000/

app.post("/store-user", function (req, res) {
  const userName = req.body.username; //retrieve the input data and store it in userName

  const filePath = path.join(__dirname, "data", "users.json"); //build the path to JSON file where userName will be stored

  //read the JSON file and stored it into fileData
  const fileData = fs.readFileSync(filePath);

  //parse the JSON file data into a JavaScript array
  const existingUsers = JSON.parse(fileData);

  //add the new username to the existing array
  existingUsers.push(userName);

  //write the updated array back to the JSON file and convert it to string
  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send("<h1>Username stored!</h1>");
});

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json"); //build the path to JSON file where userName will be stored
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = "<ul>";

  for (const user of existingUsers) {
    responseData += "<li>" + user + "</li>";
  }

  responseData += "</ul>";

  res.send(responseData);
});

app.listen(3000);
