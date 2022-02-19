const express = require('express');
let app = express();
const https = require('https');

const apiLink="https://api.openweathermap.org/data/2.5/weather?q=Dhaka&units=metric&appid=398e310b24f291b753fabdb60b31cc14"


app.get('/', function(req,res) {
    res.send("Hello");
    
    https.get(apiLink,function(response){
        console.log('statusCode : ',response.statusCode);
        console.log('headers :',response.headers);
        })
})

app.listen(3000, function(req,res){
    console.log("Working");
})
