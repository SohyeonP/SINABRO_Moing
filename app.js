var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sequelize = require('sequelize');
var bodyparser = require('body-parser');

var mainRouter = require('./routes/main');

var hoststudyRouter = require('./routes/hoststudy');

var mypageRouter = require('./routes/mypage');

var registerRouter = require('./routes/register');

var studyfindRouter = require('./routes/studyfind');


//Express Layout 팩키지 참조
var expressLayouts = require('express-ejs-layouts');

var sequelize = require('./models/index').sequelize;
//게시글 관리 라우터 파일을 참조한다.

sequelize.sync();

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.set('layout', 'layoutMaster'); //기본레이아웃 페이지 이름설정
app.set("layout extractScripts", true); //컨텐츠 페이지내 스크립트 사용(통합)여부
app.use(expressLayouts);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//메인페이지 호출시 적용되는 라우터파일 정의
//http://localhost:3000
app.use('/', mainRouter);

//참조된 사용자정보관리 라우터 객체 적용
//http://localhost:3000/users
app.use('/login', loginRouter);

//참조된 게시글 라우터 객체 적용
//http://localhost:3000/article
app.use('/mypage', mypageRouter); 

//open API 라우터의 기본 루트 주소를 세팅 한다. 
app.use('/api',openAPIRouter);

app.use('/register',registerRouter);

app.use('/studyfind',studyfindRouter);

app.use('/hoststudy',hoststudyRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;