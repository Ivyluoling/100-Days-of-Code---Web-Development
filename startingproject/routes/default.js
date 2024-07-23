const express = require("express");
const router = express.Router();

// without ejs, we need to locate each index html file, and send htmlfile
// app.get("/", function (req, res) {
//     const htmlFilePath = path.join(__dirname, "views", "index.html");
//     res.sendFile(htmlFilePath);
// });

// with EJS, we will set the html folder to a template folder first
// use render to change index.ejs to a template
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/about", function (req, res) {
  res.render("about");
});

module.exports = router;
