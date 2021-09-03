var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'delivery_app_db',
    password : 'root',
    database : 'delivery_app'
});

module.exports = db;