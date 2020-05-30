const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('express-async-errors');
const winston = require('winston');
const app = express();

const discount = require('./routes/discount');
const brand = require('./routes/brand');
const stock = require('./routes/stock');
const created_at = require('./routes/created_at');
const combination = require('./routes/combination');

const error = require('./middleware/error');

winston.handleExceptions(
    new winston.transports.File({ filename: 'uncoughtExceptions.log' }));
process.on('unhandledRejection', (ex) => {
    throw ex;
});

app.use(express.json());
app.use(express.urlencoded());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(require("body-parser").json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client')));

mongoose.connect('mongodb://localhost/greendeck_assignment')
    .then(() => winston.info('>>>>>>>>>>CONNECTED TO MONGODB<<<<<<<<<<'));

app.use('/api/discount', discount);
app.use('/api/brand', brand);
app.use('/api/stock', stock);
app.use('/api/created', created_at);
app.use('/api/combination', combination);

app.use(error);

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`>>>>>>>>>>App running on port ${port}<<<<<<<<<<`);
});