const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const initializeDatabase = require('./database');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const examesRouter = require('./routes/exames.routes')

const app = express();

initializeDatabase('mongodb+srv://admin:admin@mock1.gvdkc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/exames', examesRouter);

module.exports = app;
