const express = require('express');
const ejs = require('ejs');
var router = express.Router();

const db = require('../models/index');
const Sequelize = db.Sequelize;
var hoststudy = db.hoststudy;

router.get("/", function (req, res) {
  console.log("스터디 찾기");

  hoststudy.findAll().then((list) => {
    res.render('study_find', { data: list });
  })

})

module.exports = router;