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
    console.log(req.body);
   
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

const dataPost = JSON.stringify(data);

const options = {
    url:'https://us14.api.mailchimp.com/3.0/lists/25b7e0694e',
    method : "POST",
    headers:{
        Authorization : 'auth 7d71257ab545258714652902b2d95f36-us14'
    },
    body : dataPost

} 

if(email){
    request(options,(err,response,body)=>{
        if(err){
            res.json({error:err})
        } else{
            res.redirect(__dirname+'/static/success.html')
        }
    })
    console.log("Got Email");
} else {
    res.status(404).send({message : 'Failed'});
}

//  london app
// const jsonData = JSON.stringify(data);
// // created options 
// const options = {
//     method : "POST",
//     auth : "shakil:7d71257ab545258714652902b2d95f36-us14"
//     // auth : 'https://us14.api.mailchimp.com/3.0/',
// } 


// const request = https.request(url,options,function(response){
//     response.on("data", function(data){
//         console.log(JSON.parse(data));
//     })
//     request.write(jsonData);
//     request.end(); 
// });
// res.send("Welcome, <b>" + fName +" "+ lName + "</b><br> Your email address is <b>"+email+"</b>");
// res.sendFile(__dirname+"/static/success.html");
// apiurl  'https://<dc>.api.mailchimp.com/3.0/'
//apikey 7d71257ab545258714652902b2d95f36-us14  
// auid 25b7e0694e 
})
app.listen(3000,function(req,res){
    console.log("server Working");
})

