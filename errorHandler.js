module.exports = function(AppParameter) {

    let listStatusCodes = require("http").STATUS_CODES;

    let errorCodes = (function(listCodes, startNumber, endNumber) {
        let listMin = 100;
        let listMax = 511;
        if (startNumber < listMin || endNumber > listMax) throw new Error("The secondParameter(startNumber) cannot be smaller than 100 and the third parameter cannot be bigger than 514");
        let ObjectCodesReturn = {};
        Object.keys(listCodes).forEach(codeNumber => {
            let ObjectHasKey = listCodes.hasOwnProperty(codeNumber);
            if (!ObjectHasKey) return;
            let messageError = listCodes[codeNumber];
            let codeToInteger = parseInt(codeNumber, 10);
            if (Number.isInteger(codeToInteger) && codeNumber >= startNumber && codeNumber <= endNumber) ObjectCodesReturn[codeToInteger] = messageError;
        });
        return ObjectCodesReturn;
    })(listStatusCodes, 400, 511);

    AppParameter.use(function(err, req, res, next) {
        console.log("inside custom error handler express");
        console.log(err.message);
        // render the error page
        if (!listStatusCodes.hasOwnProperty(err.statusCode)) throw new Error("There is not a status code nor message for the error that just ocurred!");
        let errorInfo = {};
        let messageError = "";
        if (error && errorCodes[err.statusCode]) {
            errorInfo.status = err.statusCode;
            errorInfo.message = errorCodes[err.statusCode];
        } else {
            errorInfo.status = 500;
            errorMessage = errorCodes[errorInfo.status];
        }
        messageError += "<h1>Error Code: " + errorInfo.status + "</h1><br>";
        messageError += "<h2>Description: " + errorInfo.message + "</h2>";
        messageError += `<p style="font-size:16px">Date: ${new Date()}`;
        res.status(errorInfo.status);
        res.render(messageError);
    });
}


