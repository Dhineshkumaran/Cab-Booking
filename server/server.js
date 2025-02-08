const express = require('express');
const app = express();
const axios = require('axios');
const {MongoClient} = require('mongodb'); 

app.get('/', (req, res)=>{
    
})

app.listen(3000, ()=>{
    console.log("Server has started!");
})