const express = require('express');
const ejs = require('ejs');
var router = express.Router();


router.get("/myinfo", function (req, res) {
    console.log("마이페이지");
    res.render("ejs/myinfo", {});

})
module.exports = router;