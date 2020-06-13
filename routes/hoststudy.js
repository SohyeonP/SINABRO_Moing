const express = require('express');
const ejs = require('ejs');
var router = express.Router();

const db = require('../models/index');
const Sequelize = db.Sequelize;

var hoststudy = db.hoststudy;

router.get("/", function (req, res) {
  console.log("스터디 관리");
  res.render("host", {});

})

router.get("/study_c", function (req, res, next) {
  console.log("스터디 생성");

  let study = {
    studyname: "",
    img: "",
    study_info: ""
  }
  res.render("M_CR", { study: study });

})

router.post('/study_c', function (req, res) {

  var study = {
    room_name: req.body.studyname,
    host_name: 'test',
    title_img: req.body.img,
    box_img: req.body.study_info
  };

  console.log(study);

  hoststudy.create(study)
    .then((result) => {
      console.log("등록된 데이터값", result);
      return res.redirect("/hoststudy");

    }).catch((err) => {
      console.error(err);
      next(err);
    });
})

router.get("/study_m", function (req, res) {
  console.log("스터디 수정");
  res.render("M_MR", {});

})

module.exports = router;
