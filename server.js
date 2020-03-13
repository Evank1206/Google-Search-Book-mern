// required express here
const express = require('express');
// initialize app with express()
const app = express();
// required dotenv file here
require('dotenv').config();
// initializing PORT here
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// importing apiRoutes from routes folder
const apiRoutes = require('./routes/apiRoutes');
app.use('/', apiRoutes);





app.listen(PORT, ()=>{
    console.log(`Connected : http://localhost:${PORT}`);
})