const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect to Database
connectDB();


app.get('/',(req, res)=>{
    res.send("Hello World!");
})



const PORT = process.env.PORT || 5000; //PORT 

app.listen((PORT), () => console.log(`Listening on ${PORT}`));