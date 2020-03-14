const express = require('express');
const router = express.Router();
require("dotenv").config();

// model file required here
const db = require('../model/bookdb');
// mongoose required here
const mongoose = require('mongoose');
// connecting to mongodb database
mongoose.connect('mongodb://localhost/googlebooks',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

// const bookData = {
//     title: '',
//     authors: [],
//     description: '',
//     image: '',
//     link: ''
// }
// return all saved books as JSON
router.get('/api/books', (req, res) => {
    db.find({}).then((bookData) => {
       res.json({bookData})
        console.log(bookData);

    })
})
// // save books in database
// router.post('/api/books', (req, res) => {
 
// })
// // delete books from database
// router.delete('/api/books/:id', (req, res) => {
 
// })
// get search books from google api
router.get('/search/:book', (req, res)=>{
    // 1: get api key & google route
    // 2: using axios to get request to google routes
    // 3: send back result
    res.send(req.params.book);
    // console.log(req.params.book)

}) 





module.exports = router;