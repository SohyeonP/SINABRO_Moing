const express = require('express');
const ejs = require('ejs');
var router= express.Router();




router.get("/register",function(req,res,next){
    console.log("회원가입 페이지 요청");
    res.render("ejs/register", {});

})
router.post('/register', async (req,res) =>{
   try{
    const hashedPassword = await bycrpt.hash(req.body.password,10)
    users.push({
        id: Date.now().toString(),
        email:req.body.email,
        password: hashedPassword,
        name: req.body.name
    })
    res.redirect('/login')
   }catch{
    res.redirect('/register')
   }
   console.log(users);
})