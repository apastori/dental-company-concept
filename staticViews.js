const path = require("path");

// Main Directory
const directory = require("./config/mainDirectory.js");

const express = require("express");

const process = require("process");

module.exports = function(listViewParameter, App) {
    for (var i = 0; i < listViewParameter.length; i++) {
        let viewFolder = listViewParameter[i];
        let directoryNotHome = viewFolder != "Home";
        if (directoryNotHome) {
            App.use(`/${viewFolder}`, express.static(path.join(process.cwd(), directory, viewFolder)));
        } else {
            App.use(express.static(path.join(process.cwd(), directory, viewFolder)));
        }
    }
}