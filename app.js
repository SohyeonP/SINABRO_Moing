var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var express = require('express');
var app = express();


var mainRouter = require('./routes/main');

var hoststudyRouter = require('./routes/hoststudy');

var mypageRouter = require('./routes/mypage');

var studyfindRouter = require('./routes/studyfind');

var userRouter = require('./routes/user');

//Express Layout 팩키지 참조
app.use('/', mainRouter);

app.use('/user', userRouter);

app.use('/mypage', mypageRouter); 

app.use('/studyfind',studyfindRouter);

app.use('/hoststudy',hoststudyRouter);


const models = require('./models/index.js');

models.sequelize.sync().then(()=>{
  console.log("maria moingDB 연결 성공");
}).catch(err =>{
  console.log("연결 실패");
  console.log(err);
});

app.set('views', path.join(__dirname, 'views/ejs'));
app.set('view engine', 'ejs');

// app.set('layout', 'layoutMaster'); //기본레이아웃 페이지 이름설정
// app.set("layout extractScripts", true); //컨텐츠 페이지내 스크립트 사용(통합)여부
// app.use(expressLayouts);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
// app.use("/css/",cssDirectoryPath);
//Router


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