module.exports = {
    createDatabase: function(databaseName) {
        return `CREATE DATABASE IF NOT EXISTS ${databaseName}`;
    },
    createTable: function(tableName) {
        return `CREATE TABLE IF NOT EXISTS ${tableName} (
                Id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                FirstName VARCHAR(255) NOT NULL,
                LastName VARCHAR(255) NOT NULL,
                Email VARCHAR(255) NOT NULL,
                Phone VARCHAR(255) NOT NULL,
                regDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;
    },
    insertData: function(tableName, name, lastName, email, phone) {
        return `INSERT INTO ${tableName} (FirstName, LastName, Email, Phone)
                VALUES ('${name}', '${lastName}', '${email}', '${phone}')`;
    },
    tests: function(tableName, numberTests) {
        if (!Number.isInteger(numberTests)) throw Error("numberTests parameter has to be an integer")
        let contador = 1;
        let entireSql = "";
        while (contador <= numberTests) {
            entireSql += this.insertData(tableName, `cliente${contador}`, `apellido${contador}`, `cliente${contador}@gmail.com`,`0000000000${contador}`);
            entireSql += ";";
            contador++;
        }
        return entireSql;
    }
}