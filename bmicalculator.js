const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var _weight = Number(req.body.weight);
    var _height = Number(req.body.height);
    var bmi = Math.round(((_weight / Math.pow(_height, 2)) + Number.EPSILON) * 100) / 100; //Round down to 2 decimal places
    res.send("Your BMI is: " + bmi);
})


app.listen(3000, function() {
    console.log("Server started on port 3000.");
});