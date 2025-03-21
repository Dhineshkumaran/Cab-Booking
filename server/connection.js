const {MongoClient} = require('mongodb');

const client = new MongoClient(process.env.CONN_STR);
const connect = async()=>{
    try {
        await client.connect();
        console.log("Connected to database successfully!");
    } catch (error) {
        console.log("Error connecting to database!");
    }
}

module.exports = {connect, client};