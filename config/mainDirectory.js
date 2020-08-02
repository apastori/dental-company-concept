// File System Module
const fileSystem = require("fs");

// Process Module
const process = require('process');

// Content Directory Options
let directoryOptions = ["frontEnd", "public", "views"];

module.exports = (function() {
    let directory = null;
    fileSystem.readdirSync(process.cwd(), { withFileTypes: true }).forEach(function(singleElement) {
        let singleElementInPath = singleElement;
        let elementName = singleElementInPath.name;
        let elementIsInOptions = directoryOptions.includes(elementName);
        if (!singleElementInPath.isDirectory() || !elementIsInOptions) return;
        if (!directory) {
            //Directory is Null
            directory = elementName;
        } else {
            //Directory is String
            let elementIsBeforeThanCurrentDirectory = directoryOptions.indexOf(elementName) < directoryOptions.indexOf(directory);
            if (elementIsBeforeThanCurrentDirectory) directory = elementName;
        }
    });
    return directory;
})();

