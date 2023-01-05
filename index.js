const express = require('express');

require('dotenv').config;
// to declare our application variable by importing express (which is itself a function)
const app = require("express")();
// to use external middlewares,
// to parse json before the actual data hits the function (convert the request param to json)
app.use(express.json())
// define the router ()


app.get('/',(req,res)=>{res.status(200).send({situation:'working test',message:'gdg && wtm'})})
//another request
app.post('/postest',(req,res)=>{req.res.json({message:'this one is to test POST request'})})
app.post('/product/:id', (req,res)=>{
    const { id } = req.params;
    const { result } = req.body;
    if(!result){
        res.status(418).send({message:"no result was found"})
    }
    res.json({
        situation : `the result was ${result} so welcome long-awaited ${id}`
    })
})
//call the server by listening to the PORT
app.listen(process.env.PORT||8080, ()=>console.log(`it's running on the local host:`))