const express = require('express');
const ejs = require('ejs');
var router = express.Router();

router.get("/", function (req, res) {
  console.log("스터디 관리");
  res.render("host", {});

})

router.get("/study_c", function (req, res) {
  console.log("스터디 생성");
  res.render("M_CR", {});

})

router.get("/study_m", function (req, res) {
  console.log("스터디 수정");
  res.render("M_MR", {});

})

module.exports = router;
