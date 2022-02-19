const express = require('express');
const app = express();
const https = require('https');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req,res) {
   res.sendFile(__dirname+"/signup.html");
})
app.post('/', function(req,res) {
    res.sendFile(__dirname+"/success.html");
 })
app.listen(3000,function(req,res){
    console.log("server Working");
})