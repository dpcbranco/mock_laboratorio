const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const initializeDatabase = require('./database');

const examesRouter = require('./routes/exames.routes');
const medicosRouter = require('./routes/medico.routes');

const app = express();

initializeDatabase(process.env.DBURL);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/exames', examesRouter);
app.use('/medicos', medicosRouter);

module.exports = app;
