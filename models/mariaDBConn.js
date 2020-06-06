const mariadb = require('mariadb');
const Sequelize = require('sequelize');


  var sequelize = new Sequelize('mariadb', 'root', '1234', {
    dialect: 'mariadb',
    host:'localhost'
  })