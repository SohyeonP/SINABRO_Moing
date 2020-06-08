
const express = require('express');
const ejs = require('ejs');
var router = express.Router();

router.get("/", function (req, res) {
    console.log("메인페이지");
    res.render("ejs/main", {});
})
router.get("/main", function (req, res) {
    console.log("메인페이지");
    res.render("ejs/main", {});
})
// const mainRoute = require("./views/html/main");



router.get("/about", function (req, res) {
    console.log("About 페이지 요청");
    res.render("ejs/about", {});

})
router.get("/L_main", function (req, res) {
    console.log("로그인 메인  페이지 요청");
    res.render("ejs/L_main", {});

})

