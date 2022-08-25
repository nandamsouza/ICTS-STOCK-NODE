const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

//Rotas
const index = require('./routes/index');
const fileRoute = require('./routes/fileRoute');
const policyRoute = require('./routes/policyRoute');
const fileUpload = require('express-fileupload');
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', index);
app.use('/file', fileRoute);
app.use('/policy', policyRoute);
module.exports = app;