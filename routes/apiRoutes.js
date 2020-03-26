const express = require('express');
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

// model file required here
const Book = require('../model/bookdb');
// mongoose required here
const mongoose = require('mongoose');
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost/GoogleBooks";
// connecting to mongodb database
mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false

    }).then(() => console.log("connected to mongoDB")).catch(err => console.log(err))
    // google api key
const Api_Key = process.env.GOOGLE_APIKEY;
// get search books from google api
router.get(`/search/:book`, (req, res) => {

    const queryURL = "https://www.googleapis.com/books/v1/volumes?q=quilting" + req.params.book + "&api_key=" + Api_Key + "&limit=9";
    axios.get(queryURL).then(result => {
            console.log(result.data)
            res.send(result.data.items);
        }).catch(err => {
            res.send('an error')
        })
        // console.log(req.params.book);
});
// type: POST // hitting the route: /books/save
router.post("/books/save", (req, res) => {
    // console.log("this is from req.body", req.body.title);

    // create db entry using this data.
    const book = new Book({
            title: req.body.title,
            authors: req.body.author,
            description: req.body.description,
            image: req.body.image,
            link: req.body.link
        })
        // saves book to mongodb database
    book.save().then(data => {
        res.send(data)
    })
})

// hitting the "/books/save" routes 
router.get("/books/save", (req, res) => {
    // getting all savedbook from mongodb database and render in save page
    Book.find().then(data => {
        // console.log(data);
        // sending all saved book data to front-end// rendering on save.js 
        res.send(data);
    });
});

// remove book from mongodb database

router.get("/books/save", (req, res) => {
    Book.remove().then(data => {
            console.log(data);

        })
        // res.send()
})





module.exports = router;