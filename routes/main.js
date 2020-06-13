const express = require('express');
const ejs = require('ejs');
var router = express.Router();

router.get("/", function (req, res) {
    console.log("메인페이지");
    res.render("main", {
        title: "모잉",

    });
});
router.get("/main", function (req, res) {
    console.log("메인페이지");
    res.render("main", {});
})
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

module.exports = router;