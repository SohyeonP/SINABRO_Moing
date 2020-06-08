const express = require('express');
const ejs = require('ejs');
var router = express.Router();


router.get("/myinfo", function (req, res) {
    console.log("마이페이지");
    res.render("myinfo", {});

})

router.get("/myinfo_m", function (req, res) {
    console.log("마이페이지 수정");
    res.render("myinfo_m", {});

})
module.exports = router;