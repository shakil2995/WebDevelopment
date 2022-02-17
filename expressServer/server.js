//jshint esversion:6
const express = require('express');
const app = express();


app.get("/",function(req, res){
    res.send("<h1>Hello world</h1>");
});
app.get("/images",function(req, res){
    res.send('<img src="shakil.jpg" alt="shakil image">');
});
app.get("/about",function(req, res){
    res.send("<h1>I am Shakil</h1>");
});
app.get("/contact",function(req, res){
    res.send("<h1>Phone : 01551525</h1>");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});