const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb'); 
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()


// Connecting to the MongoDB Client
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
client.connect();

// App & Database
const dbName = process.env.DB_NAME 
const app = express()
const port = 8800


// Middleware
app.use(bodyparser.json())
app.use(cors())


// Get all the passwords
app.get('/', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        const findResult = await collection.find({}).toArray();
        res.json(findResult);
    } catch (error) {
        console.error("Failed to get passwords:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post('/', async (req, res) => {
    try {
        const password = req.body;
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        const findResult = await collection.insertOne(password);
        res.send({ success: true, result: findResult });
    } catch (error) {
        console.error("Failed to save password:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.delete('/', async (req, res) => {
    try {
        const { id } = req.body;
        const db = client.db(dbName);
        const collection = db.collection('passwords');
        const findResult = await collection.deleteOne({ id });
        res.send({ success: true, result: findResult });
    } catch (error) {
        console.error("Failed to delete password:", error);
        res.status(500).send("Internal Server Error");
    }
});



app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})