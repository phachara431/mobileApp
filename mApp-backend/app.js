var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require("cors");

const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const usersRouter_mongo = require("./routes/mongo/users.js");
const productsRouter_mongo = require("./routes/mongo/products.js");

var app = express();
app.use(cors());

mongoose.connect("mongodb+srv://mApp:mApp@mapp.de8ez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use("/mongo",usersRouter_mongo);
app.use("/mongo",productsRouter_mongo);

module.exports = app;
