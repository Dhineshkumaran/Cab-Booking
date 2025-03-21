const express = require('express');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const {connect, client} = require('./connection');
connect();

app.get('/', async(req, res)=>{
    try {
        const db = client.db("testdb");
        const collection = db.collection("test");
        const data = await collection.find().toArray();
        res.json({data: data});
    } catch (error) {
        console.log(error);
        res.json({error: error});
    }
})

app.listen(3000, ()=>{
    console.log("Server has started!");
})