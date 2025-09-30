const express = require('express');
const Model = require('../models/UserModel');

const router =express();

router.post('/add', (req,res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });

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