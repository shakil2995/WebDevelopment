const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

let itemList = [];
let workList=[];
app.get('/', function (req, res){
    let date = new Date();
    options = {
        day:"numeric",
        weekday:"long",
        month:"long"
    }
    let today = date.toLocaleDateString("en-US",options);
    res.render('list', {listTitle:today,itemList:itemList});
})

app.get('/work', function (req, res){
    res.render('list', {listTitle:"Work",itemList:workList});
})
app.get('/about', function (req, res){
    res.render('about', {listTitle:"Work",itemList:workList});
})
// Post routes 
app.post('/', function (req, res){
    console.log(req.body.button);
    newItem = req.body.newItem;
    if (newItem !== "") {
        if(req.body.button==="Work"){
            workList.push(newItem);
            console.log(workList);
            res.redirect("/work");
        } else{
            itemList.push(newItem);
            console.log(itemList);
            res.redirect("/");
        }
    }
   
})
// SERVER 
app.listen(3000,function(req,res){
    console.log("server working on port 3000");
}) 