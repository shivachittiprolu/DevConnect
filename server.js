const express = require('express');
const connectDB = require('./config/db');


const app = express();

//connect to Database
connectDB();


app.get('/',(req, res)=>{
    res.send("Hello World!");
});

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));


const PORT = process.env.PORT || 5000; //PORT 

app.listen((PORT), () => console.log(`Listening on ${PORT}`));