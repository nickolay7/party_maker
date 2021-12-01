const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

const sessionConfig = {
  store: new FileStore(),
  name: 'sid',
  secret: `${process.env.SESSION_SECRET}`,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
};

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(session(sessionConfig));
// главная
const indexRouter = require('./routes/index');
//регистрация
const regRouter = require('./routes/reg');
// логин
const loginRouter = require('./routes/reg');
//логаут
const logoutRouter = require('./routes/reg');
// личный кабинет
const personalRouter = require('./routes/personal');
// создать мероприие
const createRouter = require('./routes/create');
// присоединится
const joinRouter = require('./routes/join');


app.use('/', indexRouter);
app.use('/reg', regRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/personal', personalRouter);
app.use('/create', createRouter);
app.use('/join', joinRouter);

module.exports = server;

