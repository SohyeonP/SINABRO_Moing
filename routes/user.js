const express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
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
    var m_info = req.body;

    if (!m_info.email || !m_info.name || !m_info.password || !m_info.Confpassword) {
        res.send();
    } else {
        if (m_info.password == m_info.Confpassword) {

            var m_user = {
                user_email: m_info.email,
                user_name: m_info.name,
                user_pw: m_info.password
            };

            user.create(m_user)
                .then((result) => {
                    console.log("들어간 데이터:", result);
                    res.send({ "Success": "로그인 가능" });
                    return res.redirect("/sign_in");
                }).catch((err) => {
                    console.error(err);
                    next(err);
                })



        } else {
            res.send({ "Worng": "비밀번호 안맞음" });
        }
    }

});

router.get("/sign_in", function (req, res, next) {
    console.log("로그인 페이지 요청");

    res.render("login", {});
});

router.post("/sign_in", function (req, res) {
    console.log("로그인 요청");
    let body = req.body;

    user.findOne({
        where: { user_email: body.email }
    }).then(function (user) {
        let inputPassword = body.password;
        console.log(inputPassword);
        if (user==null&& user.user_pw != inputPassword) {
            
            console.log("비밀번호 불일치");
            
            res.redirect("/sign_in");
        }
        else {
            console.log("일치");
            console.log(user.dataValues.user_pw);
            
            
            res.redirect("/L_main");
            
        }
    })
})
router.get("/L_main", function (req, res) {
    console.log("로그인 메인  페이지 요청");
    let user_name = {
        name:"사용자 이름"
    }
    res.render("L_main", {user_name:name});

})
router.get("err", function (req, res) {
    res.render(err);
})
// try { } catch{ }

module.exports = router;