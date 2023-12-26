const express = require('express');
const { MongoClient, ObjectId } = require('mongodb')
const cors = require("cors");
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();
const mongodb_pw = process.env.MONGODB_PW;
const port = process.env.PORT;

 // settings
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 서버 listen 확인
app.listen(port, () => {
  console.log(`http://localhost:${port} 에서 서버 실행중`)
})


// Mongo DB 연결 확인
let db
const url = `mongodb+srv://nyah309:${mongodb_pw}@cluster0.emzshpb.mongodb.net/?retryWrites=true&w=majority`;
new MongoClient(url).connect().then((client) => {
  console.log('DB연결성공')
  db = client.db('NamunaDB')
}).catch((err) => {
  console.log(err)
})

// DB로부터 collections 이미지 path 요청 및 client로 전송
app.get('/collections', async (req, res) => {
  let q = req.query
  let result = await db.collection('collections').find({ 'season': q.season }).toArray();
  res.send(result);
})

// 서버에서 mail 발송
app.post('/mail', (req, res) => {
  let email = req.body.email;
  let subject = req.body.subject;
  let message = req.body.message

  // 메일 검증
  if (!email || /\S+@\S+\.\S+/.test(email)) {
    res.send('MAIL_ADDRESS_KEY_ERROR');
  } else if (!subject) {
    res.send('SUBJECT_KEY_ERROR');
  } else if (!message) {
    res.send('MESSAGE_KEY_ERROR');
  }

  let text = `message\n${message}\n\nfrom: ${email}`;
  `<p>${message}</p>
    <br/>
    <p><span style='font-weight: bold'>from: </span>${email}</p>`;

  // 메일 발송 관련 인증
  let transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.MAIL_AUTH_ADDRESS, // Gmail 주소
      pass: process.env.MAIL_AUTH_PW // Gmail 비밀번호 or 앱 비밀번호
    }
  });

  // 메일 발송 관련 옵션
  let mailOptions = {
    to: process.env.MAIL_TO_ADDRESS,
    subject: subject,
    text: text
  };

  // 메일 발송
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.send(err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})

app.get('/qnas/lists', async (req, res) => {
  let total = await db.collection('questions').countDocuments({});
  res.send(`${total}`);
})

app.get('/qnas/:pageNum/list', async (req, res) => {
  let pageNum = req.params.pageNum;
  
  let questions = await db.collection('questions').find().sort({questionId: -1}).skip((pageNum - 1) * 5).limit(5).toArray();
  
  res.send(questions)
})

app.get('/qnas/detail/:qid', async (req, res) => {
  try {
    let objId = req.params.qid;
    let question = await db.collection('questions').findOne({_id: new ObjectId(objId)});
    if (question == null) { 
      res.status(400).send('그런 글 없음');
    } else {
      console.log(question);
      res.send(question); 
    }
  } catch (err) {
    console.log(err);
    res.status(400).send('이상한 url 입력함');
  }
  
})

app.post('/qnas/write', async (req, res) => {
  let post = req.body;
  
  if (post.title == '' || post.author == '' || post.content == '') {
    res.status(400).send('빈 내용이 있습니다.');
  } else {
    try {
      let date = new Date();
      post['date'] = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
      post['views'] = '0';
      
      await db.collection('questions').insertOne(post);
      await db.collection('questions').find().toArray();
      console.log('입력 성공');
      setTimeout(() => res.redirect(`${process.env.CLIENT_URL}/qnas/1`), 1000);
    } catch(e) {
      console.log(e);
      console.log('db 입력 실패');
      res.status(400).send(e);
    }
  }
})

app.post('/qnas/delete', async (req, res) => {
  try {
    let qid = req.body._id
    console.log(qid);
    let result = await db.collection('questions').deleteOne({ "_id" : new ObjectId(qid) });
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
    console.log('db 입력 실패');
    res.status(400).send(err);
  }

})