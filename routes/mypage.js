const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'views/upload/');
    },
    filename: (req,file,cb) => {
        cb(null, Date.now()+file.originalname);
    }
});
var upload = multer({storage: storage});
var router = express.Router();

const db = require('../models/index');

var user = db.user;


router.get("/myinfo", function (req, res) {
    console.log("마이페이지");
    user.findOne({ where: { user_id: 1 } }).then((userin) => {
    	res.render('myinfo', { data: userin });
		});
})

router.get("/myinfo_m", function (req, res) {
    console.log("마이페이지 수정");
    const useridx = req.query.user_id;
  
    user.findOne({ where: { user_id: 1 } }).then((userin) => {
      res.render('myinfo_m', { data: userin });
    });
  
  })

  router.post('/myinfo_m',upload.single('files'), function (req, res, next) {
    console.log(req.file);
    var filename = req.file.filename
    console.log(filename);
    user.update({
    //   user_name: req.body.nickname,
      user_email: req.body.email,
    //   checkbox: req.body.checkbox,
      user_img: filename
    }, {
  
      where: { user_id: 1 }
  
    }).then((result) => {
      // 정상 수정 후 목록페이지로 자동이동처리
      return res.redirect("/mypage/myinfo");
  
    }).catch((err) => { });
    console.log("에러발생");
  });

router.get("/alram", function (req, res) {
    console.log("알람 설정");
    res.render("alram", {});

})
module.exports = router;