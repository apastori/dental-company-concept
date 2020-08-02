const Node_PORT = 3000;
const DB_PORT = 8889;
const DB_USERNAME = "root";
const DB_PASSWORD = "root";
const DB_DATABASE = "PruebaDentalDb";
const Host = "localhost";

module.exports = (function environment() {
    return {
        Dbport: DB_PORT,
        Nodeport: Node_PORT,
        dbUsername: DB_USERNAME,
        dbPassword: DB_PASSWORD,
        dbName: DB_DATABASE,
        host: Host
    }
})();

