const express = require('express');
const UserRouter = require('./routers/UserRouter');
const ProductRouter = require('./routers/ProductRouter');

const app = express();
const port = 5000;

//middleware
app.use(express.json());
//to handle json data in request body
//without this line we cannot read json data from request body
//converts json data to javascript object
app.use('/user', UserRouter);

app.use('/product', ProductRouter);


//getbyid
//getall
//delete
//endpoint or route

app.get('/', (req,res) => {
    res.send("hello from express");
});

app.get('/add', (req,res) => {
    res.send("add response from index.js");
});

app.get('/getbyid', (req,res) => {
    res.send("get by id")
});

app.get('/getall', (req,res) => {
    res.send("get all")
});


app.get('/delete', (req,res) => {
    res.send("hello delete");
});

app.listen(port, () => {
    console.log("express server started");
});