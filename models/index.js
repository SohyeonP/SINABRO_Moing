const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = {};


db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.user = require('./m_users')(sequelize, Sequelize);
db.hoststudy = require('./hoststudy')(sequelize, Sequelize);
db.reply = require('./reply')(sequelize, Sequelize);
db.comment = require('./comment')(sequelize, Sequelize);


module.exports = db;