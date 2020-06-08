const express = require('express');
const ejs = require('ejs');
var router = express.Router();


router.get("/study_find",function(req,res){
    console.log("스터디 찾기 페이지 요청");
    res.render("study_find", {});

})
module.exports = router;