const express = require('express');
const router = express.Router();

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

const bookData = {
    title: '',
    authors: [],
    description: '',
    image: '',
    link: ''
}

router.get('/api', (req, res)=>{
    db.find({}).then((bookData)=>{
        res.send(bookData);
        console.log(bookData);
        
    })
})

// router.post('/add', (req, res)=>{
//         db.bookdb.createCollection({}).then((bookData)=>{
//             res.send(bookData);
//             console.log(bookData);
            
//         })
//     })





module.exports = router;