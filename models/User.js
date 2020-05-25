const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; 
//saltRound를 이용 해서 라운드를 암호화 하기 위해 salt 생성 한다.
//^위의 내용을 하기 위해 saltRound 를 만든다. 
const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    }, 
    email:{
        type:String,
        trim:true,   //만약 hidhen 9715@naver.com 이렇게 입력 했을때 중간의 공백을 없에는 역할을 한다. 
        unique:1    //같은 이메일은 사용 하지 못하도록
    },
    password:{
        type: String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlength :50
    },
    role:{  //role 주는 이유 관리자가 될수 있고 일반 유저가 될수 있도록 number가 1 이면 관리자 0 일반 사용자
        type:Number,
        default: 0
    },
    image:String, //그사람에 해당하는 이미지
    token:{ //token 을 이용하면 유효성 검사를 할수 있다.
        type: String
    },
    tokenExp:{
        type:Number
    }
})

userSchema.pre('save',function(next){
    var user = this;
    if(user.isModified('password')){
    // userschema 를 this가 가리킨다. 
    //비밀 번호를 암호화 할때 변경 하거나 계속 바꾸는 것이 아니기 때문에 조건을 걸어 줘야 한다.
   bcrypt.genSalt(saltRounds,function(err,salt){
    if(err) return  next(err) 
        bcrypt.hash(user.password,salt,function(err,hash){
            if(err) return next(err)
            user.password = hash
            next()
        })
    })

    }else{
        next()
    }
    //비밀 번호를 암호화 시킨다.
  
})
const User = mongoose.model('User',userSchema)
//방금 만든 모델의 이름을 넣어주면 된다.
module.exports = {User}

//만든 모델을 다른 파일 에서 사용 하고 싶으니까 내보낸다. 