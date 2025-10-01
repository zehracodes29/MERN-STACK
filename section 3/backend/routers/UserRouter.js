const express = require('express');
const Model = require('../models/UserModel');

const router =express();

router.post('/add', (req,res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);//200 means ok, successful response from http(200-299)
        //5 main categories of http status codes
        //100-199 informational responses
        //300-399 redirection messages
        //400-499 client error responses
        //500-599 server error responses
        //https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
    }).catch((err) => {
        res.status(500).json(err);//500 means internal server error
    });

});

//getbyemail
router.get('/getbyemail/:email',(req,res)=>{
    Model.find({email:req.params.email})//: denotes url parameter
    .then((result)=>{
        res.status(200).json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    })
    });
//getbycity


router.get('/getbyid', (req,res) =>
{
    res.send("get by id from user");
});

router.get('/getall', (req,res) => {
    Model.find()//find is also an asynchronous operation
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/delete', (req,res) => {
    res.send("delete response from user");
});

router.get('/update', (req,res) => {
    res.send("update response from user");
})




module.exports = router;