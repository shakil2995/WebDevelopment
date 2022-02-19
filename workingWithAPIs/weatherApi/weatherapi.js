const express = require('express');
let app = express();
const https = require('https');

const url="https://api.openweathermap.org/data/2.5/weather?q=Dhaka&units=metric&appid=398e310b24f291b753fabdb60b31cc14"


app.get('/', function(req,res) {
    https.get(url,function(response){
        console.log(response.statusCode);
        
        response.on("data",function(data){
            const weatherData = JSON.parse(data);

            res.send(`It's ${weatherData.weather[0].main}y outside`)
            console.log('statusCode : ',weatherData.weather[0].main);
        })
    })
})

app.listen(3000, function(req,res){
    //console.log("Working");
})
