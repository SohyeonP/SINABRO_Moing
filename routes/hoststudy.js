const express = require('express');
const ejs = require('ejs');
var router = express.Router();

const db = require('../models/index');
const Sequelize = db.Sequelize;

var hoststudy = db.hoststudy;

router.get("/", function (req, res) {
  console.log("스터디 관리");

  hoststudy.findAll().then((list) => {
    res.render('host', { data: list });
  })

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

router.post('/study_c', function (req, res, next) {

  var study = {
    room_name: req.body.studyname,
    host_name: 'test',
    checkbox: req.body.checkbox,
    title_img: req.body.title_img,
    introduce : req.body.study
    // box_img: req.body.study_info
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
  const studyidx = req.query.hoststudy_id;

  hoststudy.findOne({ where: { hoststudy_id: studyidx } }).then((study) => {
    res.render('M_MR', { data: study });
  });

})

router.post('/study_m', function (req, res, next) {

  hoststudy.update({
    room_name: req.body.studyname,
    checkbox: req.body.checkbox,
    title_img: req.body.img,
    introduce: req.body.study
    // box_img: req.body.study_info
  }, {

    where: { hoststudy_id: req.body.studyidx }

  }).then((result) => {
    // 정상 수정 후 목록페이지로 자동이동처리
    return res.redirect("/hoststudy");

  }).catch((err) => { });
  console.log("에러발생");
});

module.exports = router;