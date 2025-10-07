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
router.get('/getbycity/:city',(req,res)=>{
    Model.find({city:req.params.city})
    .then((result)=>{
        res.status(200).json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/getbyid/:id', (req,res) =>
{
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//delete operation

router.delete('/delete/:id', (req,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//deleted 68dbbee6b1a3392223c68d29 this data using delete operation

//update operation
router.put('/update/:id',(req,res)=>{
    Model.findByIdAndUpdate(req.params.id,req.body,{ new:true })
    .then((result)=>{
        res.status(200).json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    });
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







module.exports = router;