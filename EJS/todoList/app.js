const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

let itemList = [];
app.get('/', function (req, res){
    let date = new Date();
    options = {
        day:"numeric",
        weekday:"long",
        month:"long"
    }
    let today = date.toLocaleDateString("en-US",options);
    res.render('list', {todayListEjs:today,itemList:itemList});
})
app.post('/', function (req, res){
    newItem = req.body.newItem;

    if (newItem !== "") {
        itemList.push(newItem);
        console.log(itemList);
    }

    res.redirect("/");
})

// SERVER 
app.listen(3000,function(req,res){
    console.log("server working on port 3000");
}) 