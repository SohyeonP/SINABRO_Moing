const express = require('express');
var router = express.Router();

const db = require('../models/index');
const Sequelize = db.Sequelize;


var user = db.user;


router.get("/sign_up", function (req, res, next) {
    console.log("회원가입 페이지 요청");

    let m_user = {
        email: "",
        name: "",
        password: ""
    }
    res.render("register", { m_user: m_user });

})
router.post("/sign_up", function (req, res) {
    var m_user = {
        user_email: req.body.email,
        user_name: req.body.name,
        user_pw: req.body.password
    };
    console.log(m_user);

    user.create(m_user)
        .then((result) => {
            console.log("들어간 데이터:", result);
            return res.redirect("/user/sign_in");
        }).catch((err) => {
            console.error(err);
            next(err);
        })

})
// router.post(("/sign_up", (req, res) => {
//     console.log(req.body);

//     const m_User = {
//         user_email: req.body.email,
//         user_name: req.body.name,
//         user_pwd: req.body.password
//     };

//     let { user_email, user_name, user_pwd } = data;
//     m_User.create(m_User).then((result) => {
//         console.log("들어간 데이터:", result);
//         return res.redirect("/sign_up");
//     }).catch((err) => {
//         console.error(err);
//         next(err);
//     })

// }))
router.get("/sign_in", function (req, res) {
    console.log("로그인 페이지 요청");
    res.render("login", {});
})

// router.get("err",function(req,res){
//     res.render(err);
// })


module.exports = router;