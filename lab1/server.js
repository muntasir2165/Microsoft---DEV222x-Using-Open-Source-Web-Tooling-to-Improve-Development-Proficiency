var express = require('express');

//instantiate Express
var app = express();

//get path
var path = require("path");

app.use(express.static(__dirname));

//Set up REST responses
app.get('/', function(req, res){
  // res.send('Hello from Express!');
  // res.sendFile(path.join(__dirname + '/index.html'));
  // the following line requires the code in line 9
  res.sendFile('/index.html');
});

//Start the server
app.listen(3000, function(){
  console.log("Express running on port 3000.");
});

