
const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at: kumaramansingh137@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("My name is Aman and I love beer and code.");
});

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Code</li><li>Gaming</li><li>Movies</li></ul>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
