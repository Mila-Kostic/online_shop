"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var dbConfig = require('./config/dbConfig');

var mongoose = require('mongoose');

var Users = require('./models/userModel');

var serverConfig = require('./config/serverConfig.js');

var app = express();
console.log(Users); //const router = express.Router(); // router is depreceted, now is change it in line 13 also, we need app.post no router.post
//console.log(dbConfig);
// mongoose.connect('mongodb://localhost/my_database'); if we use database from localhost

mongoose.connect(dbConfig.MONGODB_URL).then(function (data) {
  return console.log('MONGO DB is conected.');
})["catch"](function (err) {
  return console.log("Error while connecting to MONGO DB: ".concat(err));
}); // for parsing machine code in json 

app.use(bodyParser.urlencoded({
  extended: false
})); // parse app/json

app.use(bodyParser.json());
app.post('/api/login', function (req, res) {
  //console.log(req.body);
  //req is requst from frontend, res is response from backend
  var reqBody = req.body;
  console.log(reqBody); //const foundUser = Users.findOne({username: reqBody.username, password: reqBody.password});

  var foundUser = Users.findOne(reqBody, function (err, data) {
    console.log(data);

    if (err) {
      var errorMsg = "Error on geting user from DB: ".concat(err);
      console.log(errorMsg);
      res.send(errorMsg);
      return;
    } //else{
    // res.send(data);
    //}
    // way 1
    // if (data)
    // res.send(data);
    // else
    // res.send('User not found.');
    // way 2
    // res.send(data ? data : 'User not found.');
    // way 3


    res.send(data || 'User not found.');
  }); //console.log(foundUser);
  // res.send('login API call is working.')
});
app.post('/api/register', function (req, res) {
  var reqBody = req.body; // console.log('reg user data:', reqBody);

  Users.findOne(reqBody, function _callee(err, data) {
    var errorMsg, newUser, saveNewUser;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(data);

            if (!err) {
              _context.next = 6;
              break;
            }

            errorMsg = "Error on register user: ".concat(err);
            console.log(errorMsg);
            res.send(errorMsg);
            return _context.abrupt("return");

          case 6:
            if (!data) {
              _context.next = 10;
              break;
            }

            res.send("user already exit: ".concat(data.username));
            _context.next = 18;
            break;

          case 10:
            console.log('else block');
            newUser = new Users(reqBody);
            _context.next = 14;
            return regeneratorRuntime.awrap(newUser.save());

          case 14:
            saveNewUser = _context.sent;
            console.log(newUser);
            console.log(saveNewUser); //res.send('Done');

            res.send(saveNewUser || 'User not registered.');

          case 18:
          case "end":
            return _context.stop();
        }
      }
    });
  });
}); //call back function-last function in program

app.listen(serverConfig.port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is runing on port: 4000');
  }
}); //backend setup and login API