const mysql = require('mysql2');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'RRRR@NNNN',
    database: 'student-attendance-management'
});

module.exports = db.promise();
