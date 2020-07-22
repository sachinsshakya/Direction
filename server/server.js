var express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db.js');
const cors = require('cors');
const path = require('path');
const exphbs = require('express-handlebars');


var userController = require('./controllers/user.controller.js');
var mailController = require('./controllers/mail');
var index = require('./routes/index');
var institutionController = require('./controllers/inst_controller');

var port = 3000;

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/userMgmt', userController);
app.use('/inst', institutionController);
/* app.use('/send',mailController); */
app.use('/', index);

app.listen(port, function () {
    console.log('Server started on port ' + port);
});