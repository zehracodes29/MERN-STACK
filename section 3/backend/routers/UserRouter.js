const express = require('express');

const router =express();

router.get('/add', (req,res) => {
    res.send("add response from user");

});

router.get('/getbyid', (req,res) =>
{
    res.send("get by id from user");
});

router.get('/getall', (req,res) => {
    res.send("get all from user");
});

router.get('/delete', (req,res) => {
    res.send("delete response from user");
});

router.get('/update', (req,res) => {
    res.send("update response from user");
})

module.exports = router;