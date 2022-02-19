const express = require('express');
const app = express();
const https = require('https');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

app.get('/', function(req,res) {
   res.sendFile(__dirname+"/static/signup.html");
})

app.post('/', function(req,res) {
    let fName = req.body.fName;
    let lName = req.body.lName;
    let email = req.body.email;
        res.send("Welcome, <b>" + fName +" "+ lName + "</b><br> Your email address is <b>"+email+"</b>");
    // res.sendFile(__dirname+"/static/success.html");
 })
app.listen(3000,function(req,res){
    console.log("server Working");
})


// apikey
// 7d71257ab545258714652902b2d95f36-us14  