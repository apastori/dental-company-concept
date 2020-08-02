// Process Module
const process = require('process');

// Main Directory
const directory = require("../config/mainDirectory.js");

//Path Module 
const path = require("path");

function sendingView(viewName, responseParameter, requestParameter) {
    responseParameter.sendFile(path.join(process.cwd(), directory, viewName, 'index.html'));
    console.log(requestParameter.protocol);
    console.log(requestParameter.hostname);
}

module.exports = function(listViews, app) {
    
    for (var i = 0; i < listViews.length; i++) {
        let viewName = listViews[i];
        let viewIsHome = viewName == "Home";
        let viewIsContactSection = viewName == "Contact" || viewName == "Form";
        if (viewIsHome) {
            app.get('/', function(request, response, next) {
                sendingView(viewName, response, request);
            });
        } else if (!viewIsHome) {

            app.get(`/${viewName}`, function(request, response, next) {
                sendingView(viewName, response, request);
            });
            
        }
    }
    // handlingErrorRoute(app);
    app.get('*', function(req, res) {
        let response = "";
        let notFoundStatus = 404;
        let message = "Not Found";
        response += `<h1>${notFoundStatus}</h1>`;
        response += `<h2>${message}</h2>`;
        res.send(response);
    });
}