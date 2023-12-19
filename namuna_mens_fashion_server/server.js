const express = require('express');
const cors = require("cors");
const app = express();
require('dotenv').config();
const mongodb_pw = process.env.MONGODB_PW;
app.use(cors());

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

const { MongoClient } = require('mongodb')

let db
const url = `mongodb+srv://nyah309:${mongodb_pw}@cluster0.emzshpb.mongodb.net/?retryWrites=true&w=majority`;
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('NamunaDB')
}).catch((err)=>{
  console.log(err)
})

app.get('/collections', async (req, res) => {
  let q = req.query
  let result = await db.collection('collections').find({'season': q.season}).toArray();
  res.send(result);
})
