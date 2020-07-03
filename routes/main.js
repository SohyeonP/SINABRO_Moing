const express = require('express');
const ejs = require('ejs');
var router = express.Router();

const db = require('../models/index');
const Sequelize = db.Sequelize;
var hoststudy = db.hoststudy;


router.get("/", function (req, res) {
    console.log("스터디 관리");
  
    hoststudy.findAll().then((list) => {
      res.render('main', { data: list });
    })
  
  })

// router.get("/main", function (req, res) {
//     console.log("메인페이지");
//     res.render("main", {});
// })
// const mainRoute = require("./views/html/main");



router.get("/about", function (req, res) {
    console.log("About 페이지 요청");
    res.render("about", {});

})
router.get("/L_main", function (req, res) {
    console.log("로그인 메인  페이지 요청");
    res.render("L_main", {});

})
router.get("/sign_in", function (req, res) {
    console.log("로그인 페이지 요청");
    res.render("login", {});


})

router.get("/sign_up", function (req, res) {
    console.log("회원가입 페이지 요청");
    res.render("register", {

    });

})
router.get("/study_find", function (req, res) {
    console.log("스터디 찾기 페이지 요청");
    res.render("study_find", {});

})
router.get("/studyroom", function (req, res) {
    console.log("스터디 페이지 요청");
    res.render("studyroom", {});

})

module.exports = router;