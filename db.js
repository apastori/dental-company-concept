const mysql = require("mysql");

console.log(process.env.host, process.env.dbUsername, process.env.dbPassword);

const databaseConnection = mysql.createConnection({
    host: process.env.host,
    user: process.env.dbUsername,
    password: process.env.dbPassword,
    port: process.env.Dbport,
    multipleStatements: true
})

databaseConnection.connect(function(error) {
    if (error) throw error;
    console.log("MySql Connected Successfully!");
});

module.exports = databaseConnection;