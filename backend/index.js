const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const articlesModel = require("./models/articles")

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://kligan:e45c62km@emerald.k9ev0.mongodb.net/articles?retryWrites=true&w=majority",{
    useNewUrlParser: true,
});

app.post("/insert", async (req,res) => {
    const title = req.body.title;
    const description = req.body.description;
    const tags = req.body.tags;
    const newtags = req.body.newtags;
    const categories = req.body.categories;

    const articles = new articlesModel({title: title, description: description, tags: tags, newtags: newtags, categories: categories});
    try {
        await articles.save();
        res.send("Added")
    } catch(err){
        console.log(err)
    }
})


app.get("/read", async (req,res) => {
    articlesModel.find({},(err, results) => {
        if(err){
            res.send(err)
        }
        res.send(results)
    })
})
app.put("/update",async (req,res) => {
    const newTitle = req.body.newTitle;
    const id = req.body.id;

    try {
        await articlesModel.findById(id,(err,updatedTitle)=>{
            updatedTitle.title = newTitle;
            updatedTitle.save();
            res.send("Updated")
        })

    } catch(err){
        console.log(err)
    }
})

app.put("/insertNew",async (req,res) => {
    const newtags = req.body.newtags;
    const id = req.body.id;

    try {
        await articlesModel.findById(id,(err,updatedTags)=>{
            updatedTags.newtags = newtags;
            updatedTags.save();
            res.send("Updated")
        })

    } catch(err){
        console.log(err)
    }
})

app.delete("/delete/:id", async (req,res) => {
    const id = req.params.id;

    await articlesModel.findByIdAndRemove(id).exec();
    res.send("deleted");
    })


app.listen(3001, ()=>{
    console.log("Server running on port 3001")
})