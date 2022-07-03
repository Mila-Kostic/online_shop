const express = require('express');
const bodyParser = require('body-parser'); 
const dbConfig = require('./config/dbConfig');
const mongoose = require('mongoose');
const Users = require('./models/userModel');


const app = express();
console.log(Users);
//const router = express.Router(); // router is depreceted, now is change it in line 13 also, we need app.post no router.post
//console.log(dbConfig);
// mongoose.connect('mongodb://localhost/my_database'); if we use database from localhost
mongoose.connect(dbConfig.MONGODB_URL)
.then(data => console.log('MONGO DB is conected.'))
.catch(err => console.log(`Error while connecting to MONGO DB: ${err}`));


// for parsing machine code in json 
app.use(bodyParser.urlencoded({ extended: false}));
// parse app/json
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  //console.log(req.body);
  //req is requst from frontend, res is response from backend
  const reqBody = req.body;
  console.log(reqBody);

//const foundUser = Users.findOne({username: reqBody.username, password: reqBody.password});
const foundUser = Users.findOne(reqBody);
console.log(foundUser);
  res.send('login API call is working.')
});




//call back function-last function in program
app.listen(4000, err => {
    if (err) {
    console.log(err);
    }
    else {
  console.log('Server is runing on port: 4000');
    }
});



