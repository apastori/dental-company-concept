// Getting Environment setup
process.env = require("./environment.js");

// Getting Express stuff
const express = require('express');

// Getting Body Parser 
const bodyParser = require("body-parser");

// Getting Cookie Parser
const cookieParser = require("cookie-parser");

//Getting Middleware Logger Morgan
const morgan = require("morgan");

// Initiating App
const app = express();

//listViews
const listViews = require("./config/viewList.js");

// Port 
let port = process.env.Nodeport || 3000;

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//Using Morgan with the Express App
app.use(morgan(':method :url :status :response-time ms'));

// Static Files
require("./staticViews.js")(listViews, app);

// Static Libraries and Frameworks
require("./staticTools.js")(app);

//Routes
require("./routes/routes.js")(listViews, app);

//Form 
require("./formData.js")(listViews, app);

//Error Handler
require("./errorHandler.js")(app);

// Starting Server
require("./server.js")(app, port);

module.exports = app;
