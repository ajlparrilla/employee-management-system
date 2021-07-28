var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connect = require('mongoose');

var administratorRouter = require('./routes/administrator');
var staffRouter = require('./routes/staff');
var employeeRouter = require('./routes/employee');
var cors = require('cors')
var app = express();

app.use(cors({
  origin:['http://localhost:4200', 'http://127.0.0.1:4200'],
  credentials: true
}))

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ajlparrilla:asus03221998@cluster0.xwx2c.mongodb.net/employee-manager?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true})

//passport
var passport = require('passport')
var session = require('express-session')

app.use(session({
  name:'myname.sid',
  resave: false,
  saveUninitialized: false,
  secret: 'secret',
  cookie: {
    maxAge: 3600000,
    httpOnly: false,
    secure: false
  }
}))

require('./passport-config');
require('./staff-passport-config');
require('./employee-passport-config');
app.use(passport.initialize())
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/administrator', administratorRouter);
app.use('/staff', staffRouter);
app.use('/employee', employeeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
