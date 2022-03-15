const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
mongoose.connect('mongodb://localhost:27017/wikiDB');
app.use(bodyParser.urlencoded({ extended: true }))
// model schema 
const articleSchema = new mongoose.Schema({
    title:String,
    content:String,
})
// model name 
const Article = mongoose.model('article',articleSchema); 
// document 
// const testArticle = new Article({
//     title:"Article ",
//     content:"this is the article",
// })
// testArticle.save();


app.get('/', function (req,res){

})
app.route('/articles')
    .get(function (req,res){
    const articlesArr = Article.find(function(err,results) {
    if(!err){
        res.send(results);
        // console.log(results);
    } else{
        res.send(err);
    }
    });
    })
    .post(function(req,res){
        const newArticle = new Article({
            title:req.body.title,
            content:req.body.content,
        })
        newArticle.save(function(err){
            if(!err){
                res.send("successfully updated");
            } else{
                res.send(err);
            }
        });
    })
    .delete(function(req,res){
        Article.deleteMany(function(err){
            if(!err){
                res.send("successfully deleted");
            } else{
                res.send(err);
            }
        });
    });
    //  targetting specific article 
app.route("/articles/:articleTitle")
    .get(function(req,res){
        Article.findOne({title:req.params.articleTitle},function(err,foundArticle){
            if(foundArticle){
                res.send(foundArticle);
            } else{
                res.send("No article found");
            }
        });
    })
    // .post(function(req,res){
    //     const newArticle = new Article({
    //         title:req.body.title,
    //         content:req.body.content,
    //     })
    //     newArticle.save(function(err){
    //         if(!err){
    //             res.send("successfully updated");
    //         } else{
    //             res.send(err);
    //         }
    //     });
    // })

    // .put(function(req,res){
    //     Article.updateOne(
    //         {title:req.params.articleTitle},
    //         {$set:req.body.title,content:req.body.content},
    //         {overwrite:true},
    //             function(err){
    //                 if(!err){
    //                     res.send("Updated");
    //                 } else{
    //                     console.log(req.body.title);
    //                     res.send(err);
    //                 }
    //             }
    //     );
    // })
    
    .patch(function(req,res){
        Article.updateOne(
            {title:req.params.articleTitle},
            {$set:req.body},
                function(err){
                    if(!err){
                        res.send("Updated");
                    } else{
                        console.log(req.body.title);
                        res.send(err);
                    }
                }
        );
    })
    .delete(function(req,res){
        Article.deleteOne({title:req.params.articleTitle},function(err){
            if(!err){
                res.send("Deleted");
            } else{
                res.send(err);
            }
        });
    });
    
app.listen(3000,function(req,res){
    console.log("Server is working");
})