// This  is the File of all the Javascript Functions

//const spreadsheet = require('mainstyle.css');

function attemptSave() {

const mainImage = document.getElementById("main-image-container");

mainImage.addEventListener("mouseover", function() {
    var headElement = document.querySelector("head");
    var newStyleAfterBefore = document.createElement("style");
    newStyleAfterBefore.innerHTML = 
    `#main-image-container::before {
        content: 'Cuidamos';
        position: absolute;
        top: 70px;
        right: 600px;
        display: none;
        color: white;
        font-size: 80px;
        text-transform: uppercase;
        font-family: 'raleway', sans-serif;
        text-shadow: 3px 3px 3px #ffffff;
    }

    #main-image-container::after {
        content: 'Sonrisas';
        position: absolute;
        top: 70px;
        right: 380px;
        display: none;
        color: white;
        font-size: 80px;
        text-transform: uppercase;
        font-family: 'raleway', sans-serif;
        text-shadow: 3px 3px 3px #ffffff;  
    }`;
    headElement.appendChild(newStyleAfterBefore);
    var styleSheet = document.styleSheets[1];
    styleSheet.insertRule('#main-image-container::before', "content: 'Cuidamos';");
 });

mainImage.addEventListener("mouseout", function() {
    var headElement = document.querySelector("head");
    var styleElementToHide = document.querySelector("style");
    headElement.removeChild(styleElementToHide);
 });
}

function changeStyleinCss(id, value) {
    styleDocument.setProperty('--' + id, value);
}

//Getting Windows Width and Calculating Percentage

const innerWindowWidth = window.innerWidth;

function ruleOfThree(percentage, totalValue) {
    resultPercentage = percentage * totalValue / 100;
    return resultPercentage;
}

ruleOfThree(30, window.innerWidth);

function needsWork() {

    const mainImage = document.getElementById("main-image-container");

    mainImage.addEventListener("mouseover", function() {
        var titleElements = mainImage.querySelectorAll("h1");
        console.log(titleElements);
        function movingAnimation() {
        for (var i = 0; i < titleElements.length; i++) {
            titleElements[i].style.display = "inline-block";
        }
        changeStyleinCss("translateDuration", 20 + "s");
        changeStyleinCss("translateXAxisBefore", 180 + "px");
        changeStyleinCss("translateXAxisAfter", -180 + "px");
        }
        setTimeout(movingAnimation, 2000);
    });

    mainImage.addEventListener("mouseout", function() {
        var titleElements = mainImage.querySelectorAll("h1");
        for (var i = 0; i < titleElements.length; i++) {
            titleElements[i].style.display = "none";
        }
    });
}

// Carrousel changing just the background-image url 

// var imagesURL = {
//     img1: "resources/WhatsApp Image 2019-06-10 at 15.13.42.jpeg",
//     img2: "resources/WhatsApp Image 2019-06-10 at 15.13.19.jpeg",
//     img3: "resources/WhatsApp Image 2019-06-10 at 15.13.38.jpeg",
//     img4: "resources/WhatsApp Image 2019-06-10 at 15.13.40.jpeg",
//     img5: "resources/WhatsApp Image 2019-06-10 at 15.13.41.jpeg"
// };

// var arrayImages = Object.values(imagesURL);

// function changingImageBackground() {
//     //imageContainer.style.backgroundImage = `url(${url})`;
//     imageContainer.classList.add('image-2');
//     console.log("image-background has been changed");
//     console.log(arguments);
// }

function changeBackgroundImage() {
    var controller = 0;
    var imagesDiv = document.getElementsByClassName("image-div");

    setInterval( function() {

    var imageToChange = imagesDiv[controller];
    for (var i = 0; i < imagesDiv.length; i++) {
        if (imagesDiv[i].classList.contains("show")) {
            imagesDiv[i].classList.remove("show");
        } 
    }

    imageToChange.classList.add("show");

    if (controller + 1 < imagesDiv.length) {
        controller++;
    } else {
        controller = 0;
    }
  }, 5000);
}









