/*** Parameter für Datenbankverbindung */
var dbConnectionParams = {
    host: '127.0.0.1',
    port: 3306,
    user: 'pizza',
    password: 'pass123'
};
var dbName = 'pizza';
  
var mysql = require('mysql');
var connection = mysql.createConnection(dbConnectionParams);
connection.connect(function(err) {
    if (err) throw err;
    connection.query(`USE ${dbName}`, function() {
        console.log(`Connected to database ${dbName}!`);
    });
});
  
exports.executeQuery = (sql, callback) => {
    connection.query(sql, function (err, result) {
        if (err) {
            throw message;
        } else {
            callback(result);
        }
    });
}
exports.escapeValue = (param) => {
    return connection.escape(param);
}