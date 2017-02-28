var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var todo = require('./routes/todo');

var PORT = 3000;

var app = express();

//View Engine
app.set('view', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

app.use('/', index);
app.use('/todo', todo);

app.listen(PORT, function() {
  console.log('Server started on: http://localhost:3000/');
});
