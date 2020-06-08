// const express = require('express');
// const ejs = require('ejs');
// const app = express();
// const bycrpt = require('bcrypt');
// const PORT = process.env.PORT || 3000;
// const bodyparser = require('body-parser');
// app.use(express.urlencoded({ extended: false }))

// app.set('view engine', 'ejs');
// app.use(express.static(__dirname + '/'));

// app.get("/", function (req, res) {
//     console.log("메인페이지");
//     res.render("ejs/main", {});
// })
// app.get("/main", function (req, res) {
//     console.log("메인페이지");
//     res.render("ejs/main", {});
// })
// // const mainRoute = require("./views/html/main");
// app.get("/login", function (req, res) {
//     console.log("로그인 페이지 요청");
//     res.render("ejs/login", {});


<<<<<<< HEAD
})
app.post('/login', (req, res) => {

=======
// })
// app.post('/login',(req,res) =>{
   
>>>>>>> ba19559acb4db35882f49bdbc00fcdeb2331e77b

// })

<<<<<<< HEAD
app.get("/register", function (req, res) {
    console.log("회원가입 페이지 요청");
    res.render("ejs/register", {});

})
app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bycrpt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            email: req.body.email,
            password: hashedPassword,
            name: req.body.name
        })
        res.redirect('/login')
    } catch{
        res.redirect('/register')
    }
    console.log(users)

})
app.get("/study_find", function (req, res) {
    console.log("스터디 찾기 페이지 요청");
    res.render("ejs/study_find", {});
=======
// app.get("/register",function(req,res){
//     console.log("회원가입 페이지 요청");
//     res.render("ejs/register", {});

// })
// app.post('/register', async (req,res) =>{
//    try{
//     const hashedPassword = await bycrpt.hash(req.body.password,10)
//     users.push({
//         id: Date.now().toString(),
//         email:req.body.email,
//         password: hashedPassword,
//         name: req.body.name
//     })
//     res.redirect('/login')
//    }catch{
//     res.redirect('/register')
//    }
//    console.log(users)

// })
// app.get("/study_find",function(req,res){
//     console.log("스터디 찾기 페이지 요청");
//     res.render("ejs/study_find", {});
>>>>>>> ba19559acb4db35882f49bdbc00fcdeb2331e77b

// })
// app.get("/about", function (req, res) {
//     console.log("About 페이지 요청");
//     res.render("ejs/about", {});

// })
// app.get("/L_main", function (req, res) {
//     console.log("로그인 메인  페이지 요청");
//     res.render("ejs/L_main", {});

// })
// app.get("/myinfo", function (req, res) {
//     console.log("마이페이지");
//     res.render("ejs/myinfo", {});

// })

<<<<<<< HEAD
app.get("/myinfo_m", function (req, res) {
    console.log("마이페이지 수정");
    res.render("ejs/myinfo_m", {});

})

app.get("/host", function (req, res) {
    console.log("호스트 페이지");
    res.render("ejs/host", {});

})

app.get("/M_CR", function (req, res) {
    console.log("스터디 생성 페이지");
    res.render("ejs/M_CR", {});

})

app.get
app.listen(3000, () => {
    console.log(`3000번 port에 http server를 띄웠습니다.`)
})
// 뷰 엔진 설정
=======
// app.get
// app.listen(3000, () => {
//     console.log(`3000번 port에 http server를 띄웠습니다.`)
// })
// // 뷰 엔진 설정
>>>>>>> ba19559acb4db35882f49bdbc00fcdeb2331e77b
