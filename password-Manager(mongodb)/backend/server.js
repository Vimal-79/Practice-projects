const express = require('express')
const app = express()
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser')
const cors = require("cors")

const port = 3000

dotenv.config()
app.use(cors())
app.use(bodyParser.json())

// const client = new MongoClient(process.MONGO_URI)
// Connection URL
const url = process.env.MONGO_URI; // database connection string
const client = new MongoClient(url);
const dbName = "Userdata"

client.connect();

//  Get all passwords 
app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('UserDetails');
  const findResult = await collection.find({}).toArray();
  res.json(findResult)
})

// save all passwords
app.post('/', async (req, res) => {
  const password = req.body
  console.log(password)
  const db = client.db(dbName);
  const collection = db.collection('UserDetails');
  const insert = await collection.insertOne(password)
  // console.log(req.body)
  res.send(password)
})

// delete password 
app.delete('/', async (req, res) => {
  const user = req.body
  const db = client.db(dbName);
  const collection = db.collection('UserDetails');
  const result = await collection.deleteOne({id: user[0].id})
  res.send({sucess: true , result: user , id: user[0].id})
})

// delete all password 
app.patch('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('UserDetails');
  const result = await collection.deleteMany({})
  res.send({sucess: true , result: password})
})

app.put('/' , async (req, res)=>{
  const user = req.body;
  console.log(user)
  const db = client.db(dbName);
  const collection = db.collection('UserDetails');
  const result = await collection.updateOne({id: user.id}, {$set: {website: user.website , username: user.username , password: user.password}})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
