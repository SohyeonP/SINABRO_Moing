var express = require('express');
const app = express()
const ejs = require('ejs');
var router = express.Router();


router.get("/login", function (req, res) {
    console.log("로그인 페이지 요청");
    res.render("ejs/login", {});
})
router.post('/login',(req,res) =>{
   

})