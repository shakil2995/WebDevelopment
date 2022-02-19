const express = require('express');
let app = express();
const api="https://api.openweathermap.org/data/2.5/weather?q=Dhaka&units=metric&appid=398e310b24f291b753fabdb60b31cc14"


app.get('/', function(req,res) {
    res.send("I am working")
})

app.listen(3000, function(req,res){
    console.log("Working");
})
