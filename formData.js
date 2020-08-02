const db = require("./db.js");
const sql = require("./sql.js");
const Client = require("./client.js");
const toolbox = require("./toolBox.js");

module.exports = function(listViews, app) {
    let contador = 0;
    let postExists = false;
    let viewContactForm;
    while (contador < listViews.length && !postExists) {
        let viewName = listViews[contador];
        if (viewName == "Form" || viewName == "Contact") {
            viewContactForm = viewName;
            postExists = true;
        }
        contador++;
    }
    if (viewContactForm === "undefined") throw new Error("no contact or form view");
    app.post(`/${viewContactForm}`, function(req, res) {
        console.log(req.body);
        let newClient = new Client(req.body.name, req.body.lastname, req.body.email, req.body.phone);
        let tableName = "Clients";
        // Create Db if not exists
        db.query(sql.createDatabase(process.env.dbName), function(error, result) {
            if (error) throw error;
            console.log("database created or it already exists!", result);
        });

        //Select Database created
        db.changeUser({database: process.env.dbName}, function(error) {
            if (error) {
                console.log("error in changing database", error);
                return;
            }
            console.log("inside correct database");
        });

        //Create Table if not exists
        db.query(sql.createTable(tableName), (error, result) => {
            if (error) throw error;
            console.log("table created or it already exists!", result);
        });

        //Testing
        db.query(`${sql.tests(tableName, 3)}`, toolbox.listOfNumbers(toolbox.countingCharacters(";", sql.tests(tableName, 3))), function(error, result) {
            if (error) throw error;
            console.log("test entries successful!");
        });

        // Insert Customer Data
        db.query(sql.insertData(tableName, newClient.name, newClient.lastName, newClient.email, newClient.phone), function(error, result) {
            if (error) throw error;
            console.log("data inserted successfully!", result);
        });
        res.redirect('/Contact/');
    });
}