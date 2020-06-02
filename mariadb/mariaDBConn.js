const mariadb = require('mariadb');
var conn= mariadb.createConnection();

conn.connect();

mariadb.createConnection({
    host :"localhost",
    user:'root',
    password:'1234'
}).then(conn)