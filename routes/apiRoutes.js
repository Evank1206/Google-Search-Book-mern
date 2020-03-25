const express = require('express');
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

// model file required here
const Book = require('../model/bookdb');
// mongoose required here
const mongoose = require('mongoose');
// connecting to mongodb database
mongoose.connect("mongodb://localhost/GoogleBooks",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

// make post request 
// url: books/save
// step 1:) show all data on react front end
// step 2:) send all data to backend when you click save.
// step 3:) save data to mongodb

const Api_Key = process.env.GOOGLE_APIKEY;

// get search books from google api
router.get(`/search/:book`, (req, res) => {

    const queryURL = "https://www.googleapis.com/books/v1/volumes?q=quilting" + req.params.book + "&api_key=" + Api_Key + "&limit=9";
    axios.get(queryURL).then(result => {
        // console.log(result.data)
        res.send(result.data.items);
    }).catch(err => {
        res.send('an error')
    })
    // console.log(req.params.book);
});
// type: POST
// route: /books/save
// saves book to database
router.post("/books/save", (req, res) => {
    // res.send(req.body);
    console.log("this is from req.body", req.body);

    // console.log(req.body.title)

    // create db entry using this data.
    const book = new Book({
        title: req.body.title,
        authors: req.body.author,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link
    })
    book.save().then(data => {
        res.send(data)
    })
})

// getting book from database and render in save page
router.get("/books/keep", (req, res)=>{
    // Book.books.find({})
    res.send(Book.books.find({}))
})





module.exports = router;