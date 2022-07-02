const express = require('express');
const bodyParser = require('body-parser'); 


const app = express();
//const router = express.Router(); // router is depreceted, now is change it in line 13 also, we need app.post no router.post

// for parsing machine code in json 
app.use(bodyParser.urlencoded({ extended: false}));
// parse app/json
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  console.log(req.body);
  //req is requst from frontend, res is response from backend
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



//mongodb+srv://Mila:<password>@cluster0.sc5vi.mongodb.net/?retryWrites=true&w=majority   