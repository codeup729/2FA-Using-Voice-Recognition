const express = require("express");
// const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
    res.render("main");
});

app.get("/signup",function(req,res){
    res.render("signup");
});

app.get("/index",function(req,res){
    res.render("index");
});

app.get("/voiceauth",function(req,res){
    res.render("voiceauth");
});
app.listen(3000, function() {
    console.log("Server started on port 3000");
  });

