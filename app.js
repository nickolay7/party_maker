const express = require('express');
const {serverStart, app} = require('./server');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

// const sessionConfig = {
//   store: new FileStore(),
//   name: 'sid',
//   secret: `${process.env.SESSION_SECRET}`,
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     httpOnly: true,
//     maxAge: 1000 * 60 * 60 * 24,
//   },
// };
//
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(logger('dev'));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// app.use(cookieParser());
// app.use(session(sessionConfig));

// const indexRouter = require('./routes/index');
// const regRouter = require('./routes/reg');
// const loginRouter = require('./routes/login');
// const logoutRouter = require('./routes/logout');


// app.use('/', indexRouter);
// app.use('/reg', regRouter);
// app.use('/login', loginRouter);
// app.use('/logout', logoutRouter);

serverStart().then(() => console.log('I am starting:)'));
