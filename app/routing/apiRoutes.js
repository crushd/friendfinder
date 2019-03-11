var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 5500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

var friendsList = [];

app.get("/api/friends", function(req, res) {
    return results.json(friendsList);
});