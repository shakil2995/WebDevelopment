const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));




app.get('/', function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.get('/additioncalculator', function(req,res){
    res.sendFile(__dirname+"/additioncalculator.html");
})

app.get('/bmicalculator', function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})






app.post('/additioncalculator', function(req,res){
    let num1 =Number(req.body.num1);
    let num2= Number(req.body.num2);
    let add = num1+num2;
    res.send(`${add}`);
})

app.post('/bmicalculator', function(req,res){
    // res.send("Working");
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    bmi = weight / (height*height);
    res.send(`Your BMI is ${bmi}`);
})








app.listen(3000,function(){
    console.log("Server started on port 3000");
    // console.log(__dirname);
});
