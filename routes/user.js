const express = require('express');
var router = express.Router();

const db = require('../models/m_users');

const Sequelize = db.Sequelize;


var m_User = db.m_User;

const mariadb = require('mariadb');

router.get("/sign_up", function (req, res) {
    console.log("회원가입 페이지 요청");
    res.render("user/sign_up", {

    });

})
router.post(("/sign_up", function (req, res) {
    console.log(req.body);  
              
                const  m_User = {
                    user_email:req.body.email,
                    user_name:req.body.name,
                    user_pwd: req.body.password
                };
                
                let {user_email,user_name,user_pwd} = data;
                m_User.create(m_User).then((result)=>{
                    console.log("들어간 데이터:",result);
                    return res.redirect("/");
                }).catch((err)=>{
                    console.error(err);
                    next(err);
                })
            
        }))
router.post(("/sign_up", (req, res) => {
    console.log(req.body);

    const m_User = {
        user_email: req.body.email,
        user_name: req.body.name,
        user_pwd: req.body.password
    };

    let { user_email, user_name, user_pwd } = data;
    m_User.create(m_User).then((result) => {
        console.log("들어간 데이터:", result);
        return res.redirect("/sign_up");
    }).catch((err) => {
        console.error(err);
        next(err);
    })

}))
router.get("/sign_in", function (req, res) {
    console.log("로그인 페이지 요청");
    res.render("sign_up", {});
})

// router.get("err",function(req,res){
//     res.render(err);
// })


module.exports = router;