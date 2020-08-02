function listOfCssProperties(element, appendPlace, propertyName) {
    console.log("cssList Function Running")
    var listOfCss = window.getComputedStyle(element, null);
    var justOneProperty = listOfCss.getPropertyValue(propertyName);
    var listOfCssText = listOfCss.cssText;
    var newParagraphElement = document.createElement("p");
    newParagraphElement.innerHTML = listOfCssText;
    appendPlace.append(newParagraphElement);
}

var containerImageDiv = document.getElementById("services-image-container-div");
console.log(containerImageDiv.offsetHeight);
console.log(containerImageDiv.offsetWidth);

var clickControl = true;
var titleElement = document.getElementsByClassName("presentation-services")[0].querySelector("h2");
var paragraphElement = document.getElementsByClassName("presentation-services")[0].querySelector("p");
const initialParagraphContent = paragraphElement.textContent;

function changingLanguage() {
    if (parameter) {
    switch (clickControl) {
        case true:
            titleElement.innerHTML = "Care For Smiles";
            var contentParagraph = paragraphElement.textContent;
            var arrayWithWords = contentParagraph.split(" ");
            var numberOfWords = arrayWithWords.length;
            var contenidoEnglishParagraph = "";
            for (var i = 0; i < arrayWithWords.length; i++) {
                if (contenidoEnglishParagraph) {
                    contenidoEnglishParagraph += " english";
                } else {
                    contenidoEnglishParagraph += "english";
                }
            }
            paragraphElement.innerHTML = contenidoEnglishParagraph;
            clickControl = false;
            console.log("click control is now false");
            break;
        case false:
            titleElement.innerHTML = "Cuidamos Sonrisas";
            paragraphElement.innerHTML = initialParagraphContent;
            clickControl = true;
            console.log("click control is now true");
            break;
       }
    } else if (parameter == undefined) {
        console.log("parameter is equal to undefined!");
    } else {
        console.log("function not running properly because of parameter")
    }
    console.log(clickControl);
    setTimeout(changingLanguage, 5000);
    //} else {
        //console.log("function not running!");
    }

function breakTextInTenLines() {
    var firstParagraphBoxDivContent = document.getElementsByClassName("box")[0].querySelector("p");
    var secondParagraphBoxDivContent = document.getElementsByClassName("box")[1].querySelector("p");
    function insideProcessOfBreakingTheLines(element) {
        var textContent = element.textContent;
        var arrayTextContent = textContent.split(' ');
        var newStringWithContent = '';
        console.log(arrayTextContent);
        for (var i = 0; i < arrayTextContent.length; i++) {
            if (newStringWithContent) {
                newStringWithContent += ' ' + arrayTextContent[i];
            } else {
                newStringWithContent += arrayTextContent[i];
            }
            if ((i + 1) % 10 === 0) {
                newStringWithContent += "<br>";
            }
        }
        console.log(newStringWithContent);
        element.innerHTML = newStringWithContent;
    }
    insideProcessOfBreakingTheLines(firstParagraphBoxDivContent);
    insideProcessOfBreakingTheLines(secondParagraphBoxDivContent);
}

function removeBreakElements(element) {
    var textContentOfElement = element.textContent;
    var newContent = textContentOfElement.replace("<br>", "");
    element.innerHTML = newContent;
}

function BeforaAndAafterWhenDarkDivsHovered() {
    const firstParagraphBoxDivContent = document.getElementsByTagName("section")[1].getElementsByClassName("inner-wrapping")[0];
    const secondParagraphBoxDivContent = document.getElementsByTagName("section")[1].getElementsByClassName("inner-wrapping")[1];
    firstParagraphBoxDivContent.addEventListener("mouseover", function(event)  {
        console.log("first paragraph hover");
        console.log(event.target);
        var element = event.target;
        var cssListBefore = getComputedStyle(element, ':before');
        var cssListAfter = getComputedStyle(element, ':after');
        console.log(cssListBefore);
        console.log(cssListAfter);
    })
    secondParagraphBoxDivContent.addEventListener("mouseover", function()  {
        console.log("second paragraph hover");
        console.log(event.target);
        var element = event.target;
        var cssListBefore = getComputedStyle(element, ':before');
        var cssListAfter = getComputedStyle(element, ':after');
        console.log(cssListBefore);
        console.log(cssListAfter);
    })
}

function insertBlackColoredDiv() {
    const firstParagraphBoxDivContent = document.getElementsByTagName("section")[1].getElementsByClassName("inner-wrapping")[0];
    const secondParagraphBoxDivContent = document.getElementsByTagName("section")[1].getElementsByClassName("inner-wrapping")[1];
    console.log(firstParagraphBoxDivContent.offsetHeight);
    console.log(firstParagraphBoxDivContent.offsetWidth);
    var mainBody = document.querySelector("body");
    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "black";
    newDiv.style.width = "500px";
    newDiv.style.height = "500px";
    mainBody.appendChild(newDiv);
    console.log("insertBlackColoredDiv function running!");
}


