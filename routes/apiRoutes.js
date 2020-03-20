const express = require('express');
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

// model file required here
const db = require('../model/bookdb');
// mongoose required here
const mongoose = require('mongoose');
// connecting to mongodb database
mongoose.connect("mongodb://localhost/GoogleBooks",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

// return all saved books as JSON
// router.get('/api/books', (req, res) => {
//     db.find({}).then((bookData) => {
//         res.json({ bookData })
//         console.log(bookData);

//     })
// })

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
    console.log(req.params.book);
    
    
});

router.post("/books/save", (req, res) => {

    res.send(req.body);
    console.log(req.body)
})

// google url:
// http://www.google.com/search?q=books -
// apiKey:
// key=API_KEY parameter






module.exports = router;