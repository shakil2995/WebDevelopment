const express = require('express');
const bodyParser = require('body-parser');
const mongooose = require('mongoose');
const https = require('https');
const { ListCollectionsCursor } = require('mongodb');
const date = require(__dirname +"/date.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
mongooose.connect("mongodb://localhost:27017/todolistDB",()=>{
    console.log("Connected to todolistDB");
});
const itemSchema=new mongooose.Schema({
    name:String,
});
const Item = mongooose.model("item",itemSchema);

const item1 = new Item({
    name:"Welcome to your todoList!"
});
const item2 = new Item({
    name:"Hit the  + button to add a new item."
});
const item3 = new Item({
    name:"<-- Hit this to delete an item.>"
});
const defaultItems = [item1,item2,item3];



let itemList = [];
let workList=[] ;
const List=[{}];

app.get('/', function (req, res){
    let day=date.getDay();
    Item.find({},function(err,foundItems){
        if (foundItems.length===0) {
            Item.insertMany(defaultItems,function(err){
    if (err) {
         console.log(err);
    }
    else{
        console.log(err);
        console.log(defaultItems);
        }
             });
             res.redirect("/");
            }
        else{
            res.render('list', {listTitle:"Today",itemList:foundItems});
        }
       
    });
 
    
})

app.get('/work', function (req, res){
    res.render('list', {listTitle:"Work",itemList:workList});
})

app.get('/about', function (req, res){
    res.render('about', {});
})

// Post routes 
app.post('/', function (req, res){
    const itemName = req.body.newItem; 
    const listName = req.body.list;
    if (itemName !== ""){
        const item = new Item({
            name:itemName,
        });
        if(listName==="today"){
            item.save();
            res.redirect("/");
        } else{
            List.findOne({name:listName},function(err,foundList){
                foundList.listName.push(item);
                foundList.save();
            })
            };
        }    
    }
  )
// SERVER 
app.listen(3000,function(req,res){
    console.log("server working on port 3000");
}) 

