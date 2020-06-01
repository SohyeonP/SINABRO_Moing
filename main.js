const express = require('express');
const ejs = require('ejs');
const app = express();
const bycrpt = require('bcrypt');
const PORT  = process.env.PORT || 3000;
const bodyparser = require('body-parser');
app.use(express.urlencoded({ extended:false }))

app.set('view engine','ejs');
app.use(express.static(__dirname+'/'));

app.get("/",function(req,res){
    console.log("메인페이지");
    res.render("main",{});
})

// const mainRoute = require("./views/html/main");
app.get("/login",function(req,res){
    console.log("로그인 페이지 요청");
    res.render("login.ejs",{});

})
app.get("/register",function(req,res){
    console.log("회원가입 페이지 요청");
    res.render("register",{});

})
app.get("/study_find",function(req,res){
    console.log("스터디 찾기 페이지 요청");
    res.render("study_find",{});

})
app.get("/about",function(req,res){
    console.log("About 페이지 요청");
    res.render("about",{});

})
app.get("/L_main",function(req,res){
    console.log("로그인 메인  페이지 요청");
    res.render("L_main",{});

})
app.get("/myinfo",function(req,res){
    console.log("마이페이지");
    res.render("myinfo",{});

})
app.post('/register',(req,res) =>{
    req.body.email
    req.body.password

})
app.get
app.listen(3000, ()=>{
    console.log(`3000번 port에 http server를 띄웠습니다.`)
})
// 뷰 엔진 설정
