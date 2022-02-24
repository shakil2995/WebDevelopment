const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
const https = require('https');

app.get('/', function (req, res){
    // res.sendFile(__dirname+"/static/index.html");
    let date = new Date();
    options = {
        day:"numeric",
        weekday:"long",
        month:"long"
    }
    var today = date.toLocaleDateString("en-US",options);
    res.render('list', {today:today});
})

app.post('/', function (req, res){
    res.sendFile(__dirname+"/static/success.html");
})

// SERVER 
app.listen(3000,function(req,res){
    console.log("server working on port 3000");
}) 