const path = require("path")

const express = require("express");

module.exports = function(App) {

    // Bootstrap Css
    App.use('/bootstrapCss', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));

    // JQuery
    App.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

    //Bootstrap Js And Popper libraries
    App.use('/bootstrapPopper', express.static(__dirname + '/node_modules/bootstrap/dist/js/'));
    
}