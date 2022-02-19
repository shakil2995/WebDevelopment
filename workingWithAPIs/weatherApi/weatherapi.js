const express = require('express');
const https = require('https');
var bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req,res) {
   res.sendFile(__dirname+"/index.html");
})
app.post('/', function(req,res) {
    // res.sendFile(__dirname+"/index.html");
    const apikey = "398e310b24f291b753fabdb60b31cc14";
    let query = req.body.cityName;
    let unit = "metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+unit+"&appid="+ apikey+"";

    console.log(req.body.cityName);
    
https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
        const weatherData = JSON.parse(data);
        const weatherCondition = weatherData.weather[0].main;
        const temperature = weatherData.main.temp;
        const icon= weatherData.weather[0].icon;
        const cityName = weatherData.name;
        let iconUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
        console.log('statusCode : ',weatherData.weather[0].main);
        res.write("<h1>"+cityName+"</h1>"); 
        res.write("<h2>It's "+weatherCondition+" outside</h2>"); 
        res.write("<h3>Temperature : "+temperature+ " degree celcius</h3>");
        res.write("<img src="+iconUrl+">");
        res.send();
        })
    })
 })
 
app.listen(3000, function(req,res){
    //console.log("Working");
})
