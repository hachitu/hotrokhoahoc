var createError 	= require('http-errors');
var express 		= require('express');
var path 			= require('path');
var cookieParser 	= require('cookie-parser');
var logger 			= require('morgan');

const expressLayouts 	= require('express-ejs-layouts');
const passport 			= require('passport');
const flash 			= require('connect-flash');
const session 			= require('express-session');
const mysql 			= require('mysql');

let date 	= require('date-and-time');
var app 	= express();

// Passport Config
require('./config/passport')(passport);

// View engine setup
app.use(expressLayouts);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// AUTO
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

// Include Routes
require('./config/routes.js')(app);

//ERROOOORRRRRRR

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
  res.render('partials/error', {
	layout:false
  });
});

module.exports = app;
