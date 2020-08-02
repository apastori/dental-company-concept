const fileSystem = require("fs");

let directory = "frontEnd";

function listOfPages(pathDirectoryP) {
    let listPages = new Array();
    fileSystem.readdirSync(pathDirectoryP, { withFileTypes: true }).forEach(function(singleContentElement) {
        if (singleContentElement.isDirectory()) {
            let nameDirectory = singleContentElement.name;
            listPages.push(nameDirectory);
        }
    });
    return listPages;
}

module.exports = listOfPages(directory);







