const express = require('express');

const app = express();
const port = 5000;

//endpoint or route
app.get('/', (req, res) => {
    res.send("Hello from express server");
});

app.get('/about', (req, res) => {
    res.send("Hello from about page");
});

//getbyid
//getall
//delete

app.listen(port, () => {
    console.log("express server started");
});