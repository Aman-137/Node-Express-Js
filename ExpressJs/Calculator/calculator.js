
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
// num1 and num2 (req.body.num1 or num2) came from index.html
var n1 = Number(req.body.num1);
var n2 = Number(req.body.num2);

var result = n1 + n2;

  res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);

  res.send("The BMI is " + bmi);
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
