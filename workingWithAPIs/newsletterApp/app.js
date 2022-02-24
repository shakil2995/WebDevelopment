const express = require('express');
const app = express();
const https = require('https');
const request = require('request');
var bodyParser = require('body-parser');
const { json } = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

app.get('/', function(req,res) {
   res.sendFile(__dirname+"/static/signup.html");
})
app.post('/', function(req,res) {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    const url = "https://us14.api.mailchimp.com/3.0/lists/25b7e0694e";
    // console.log(req.body); 
// //  Data class
const data = {
    members : [
        {
        email_address:email,
        status : "subscribed",
        merge_fields : {
            FNAME : fName,
            LNAME : lName
            }
        }
    ]
};
const jsonData = JSON.stringify(data);

const options = {
    url:'https://us14.api.mailchimp.com/3.0/lists/25b7e0694e',
    method : "POST",
    headers:{
        Authorization : 'auth 7d71257ab545258714652902b2d95f36-us14'
    },
    body : jsonData
} 
const request = https.request(url,options,function(response){
    response.on("data",function(data){
        // console.log(JSON.parse(data));
        // console.log(response.statusCode);
        if(response.statusCode===200){
            res.sendFile(__dirname+"/static/success.html");}
            else {
                res.sendFile(__dirname+"/static/failure.html");
            }
    });
});
request.write(jsonData);
request.end();
})

app.post("/failure",function(req,res){
    res.redirect("/");
})

app.listen(process.env.PORT || 3000,function(req,res){
    console.log("server Working");
})

