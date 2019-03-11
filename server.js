var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 5500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});

var friendList = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function(request, results) {
    return results.json(friendList);
});

app.post("/api/friends", function(req, res) {

    console.log("friends route req: " + req);


});