//jshint eversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', () => {
  res.sendFIle(__dirname + '/signup.html');
});

app.post("/", () => {
      let firstName = req.body.fName;
      let lastName = req.body.lName;
      let email = req.body.email;

      console.table(firstName, lastName, email);
});
app.listen(3000, () => {
  console.log('server is running on port 3000');
});