var express = require('express');
var app = express();
app.use(express.static('app'));
app.use('/bower_components', express.static('bower_components'));
// app.use('/dist', express.static('dist'));
app.listen(3000, function () {
        console.log('Our app is listening on port 3000!');
});