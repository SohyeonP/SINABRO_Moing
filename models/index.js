//ORM프로그래밍을 위한 Sequelize 모듈을 참조한다.
const path = require('path');
const Sequelize = require('sequelize');

//.env 환경설정파일에서 NODE_ENV 설정값을 가져와
//DB연결문자열이 저장된 config/config.json파일에 env 설정정보를전달해 
//해당하는 db연결 문자열을 가져온다.
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname,'..','config','config.json'))[env];

//DB 관리객체 생성
const db ={};

//시퀄라이즈 ORM 객체 생성
//시퀄라이즈 ORM 객체 생성시 관련 DB연결정보를 전달해 객체를 생성한다.
const sequelize = new Sequelize(config.database,config.username,config.password,config);

//DB객체에 시퀄라이즈 객체를 sequelize 속성으로 바인딩한다.
db.sequelize = sequelize;
db.Sequelize = Sequelize;



//각종 모델 클래스 모듈속성을 추가한다.

//사용자 모델 클래스모듈을 db객체에 User속성에 바인딩한다.
//db.User = require('./user.js')(sequelize,Sequelize);

//게시글 속성을 게시글 모델 모듈로 바인딩한다.
db.m_user = require('./m_users')(sequelize,Sequelize);
db.hoststudy = require('./hoststudy')(sequelize,Sequelize);
db.reply = require('./reply')(sequelize,Sequelize);
db.comment = require('./comment')(sequelize,Sequelize);

//DB관리객체 모듈 출력
module.exports = db;