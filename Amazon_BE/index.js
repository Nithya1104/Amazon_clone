const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Nithya:Nithya1104@cluster0.zhhl1n8.mongodb.net/List').then(() => {
  console.log('DB connected....');
});

app.listen(5000, () => {
  console.log("Server Runninng....");
});

//bodyParser 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//cors --->Cross-Origin Resource Sharing
const cors = require('cors');
app.use(cors());

//crypto
const cryptojs = require('crypto-js');
seckey = "happy";


const List = require('./Schema/Lists');
const User = require('./Schema/Users');

//**************List*************//
app.post('/list', async (req, res, next) => {
  const list = new List(req.body);
  await list.save();
  return res.send(list);
});


app.get('/list', async (req, res, next) => {
  const list = await List.find();
  return res.status(200).send(list);
});


//**************Users*************//

app.post('/user', async (req, res, next) => {
  try {
    const encrypt = cryptojs.AES.encrypt(req.body.password, seckey).toString();
    req.body.password=encrypt;
    const users = new User(req.body);
    await users.save();
    return res.status(200).send(users);
  }
  catch (err) {
    return res.status(500).send(err);
  }
});