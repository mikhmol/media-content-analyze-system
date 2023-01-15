const mysql = require('mysql2');

const connectionUrl = 'mysql://root:3228@localhost:3306/mydb'

const connection = mysql.createConnection({
    uri: connectionUrl
});

module.exports = connection;
