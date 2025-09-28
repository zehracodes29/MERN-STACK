const express = require('express');

const router = express();

router.get('/add', (req,res) =>
{
    res.send("add response from product");
});

router.get('/getbyid', (req,res) => {
    res.send("getbyid response from prodect");
});

router.get('/getall', (req,res) => {
    res.send('getall response from product');
});

router.get('/delete', (req,res) => {
    res.send("fdelete response from product");
});

module.exports = router;