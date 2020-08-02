//Running Functions when document is ready Jquery Syntax
$(document).ready(function() {
  checkingiFrame();
  hideLabelWhenContent();
  formValidationClientSide();
});

// Check if iFrame with Google Maps loaded correctly
function checkingiFrame() {
  const iFrameElement = document.querySelector("iframe");
  const iFrameElementParent = iFrameElement.parentNode;
  var UrlFromElementDirectly = iFrameElement.src
  console.log(UrlFromElementDirectly);
  var wrongBaseUrl = "https:embed?pb=!1m14!1m8!1m3!1d6544.052822982158!2d-56.1996255!3d-34.9057867!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f802a53906c55%3A0xc581ac332d7e5b77!2sJuncal+1378%2C+11000+Montevideo%2C+Departamento+de+Montevideo!5e0!3m2!1ses!2suy!4v1562277297707!5m2!1ses!2suy";
  var BaseUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6544.052822982158!2d-56.1996255!3d-34.9057867!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f802a53906c55%3A0xc581ac332d7e5b77!2sJuncal+1378%2C+11000+Montevideo%2C+Departamento+de+Montevideo!5e0!3m2!1ses!2suy!4v1562277297707!5m2!1ses!2suy";
  var headersFetchMethod = new Headers();
  var miInit = {
    method: 'GET',
    headers: headersFetchMethod,
    mode: 'no-cors',
    cache: 'default'
  };
  fetch(BaseUrl, miInit)
    .then(function(response) {
      if (response.status === 200) {
        console.log("The data was retrieved successfully!");
      } else if (response.status === 0) {
        console.log("The GET request went through properly, but did not receive a response due to CORS policies");
      }
    })
    .catch(function(error) {
      console.log("Inside the catch error function!");
      console.log("The GET request failed: " + error);
      var ObjectWithElementInformation = function(element) {
        var elementImportantInformation = element.getBoundingClientRect();
        var trueObject = {
          top: elementImportantInformation.top,
          right: elementImportantInformation.right,
          bottom: elementImportantInformation.bottom,
          left: elementImportantInformation.left,
          width: elementImportantInformation.width,
          height: elementImportantInformation.height,
          x: elementImportantInformation.x,
          y: elementImportantInformation.y
        };
        console.log(trueObject);
        return trueObject;
      }
      var iFrameInformationObject = ObjectWithElementInformation(iFrameElement);
      console.log(iFrameInformationObject);
      console.log(iFrameElementParent);
      var containerNewImage = document.createElement("div");
      containerNewImage.id = "map-photo-div-container";
      containerNewImage.style.marginTop = "15px";
      containerNewImage.style.marginRight = "auto";
      containerNewImage.style.marginLeft = "auto";
      var iFrameContainerRealWidth = iFrameInformationObject["width"];
      containerNewImage.style.width = `${iFrameInformationObject["width"]}px`;
      containerNewImage.style.height = `${iFrameInformationObject["height"]}px`;
      var newImage = document.createElement("img");
      newImage.style.position = "relative"
      newImage.style.width = "100%";
      newImage.style.height = "100%";
      newImage.style.objectFit = "cover";
      newImage.src = "resources/Screen Shot 2019-07-04 at 8.39.51 PM.png";
      iFrameElementParent.style.display = "none";
      containerNewImage.appendChild(newImage);
      var sectionContactInformation = document.getElementById("contact-information-section");
      sectionContactInformation.appendChild(containerNewImage);
      function getInnerWidth(elem) {
        return parseFloat(window.getComputedStyle(elem).width);
      }
    });
}

//Hide the label when there is content in the input
function hideLabelWhenContent() {
  document.querySelectorAll("input").forEach(InputElement => {
    InputElement.addEventListener('focusout', function () {
      var labelInput = this.nextElementSibling;
      var spanElement = labelInput.nextElementSibling;
      if (this.value.length > 0) {
        labelInput.style.display = "none";
      } else if (this.value.length == 0 && labelInput.style.display == "none") {
        labelInput.style.display = "block";
      }
    });
    InputElement.addEventListener("focusin", function() {
      var labelInput = this.nextElementSibling;
      var spanElement = labelInput.nextElementSibling;
      if (labelInput.textContent.indexOf(" ") != -1) {
        var labelInputTextContent = labelInput.textContent;
        var separatinglabelInputTextContent = labelInputTextContent.split(" ");
        labelInput.innerHTML = separatinglabelInputTextContent[1];
      } 
      if (labelInput.classList.contains("error-input") && spanElement.classList.contains("error-input")) {
        labelInput.classList.remove("error-input");
        spanElement.classList.remove("error-input");
      }
      if (this.value.length > 0 && labelInput.style.display == "none") {
        labelInput.style.display = "block";
      }
    });
  });
}

// Checking values of the form 
function formValidationClientSide() {

  var errorWithData = false;
  var errorMessage = "Error with the following information: ";
  var buttonSubmit = document.getElementsByClassName("contact-form")[0].querySelector("button");

  buttonSubmit.addEventListener("click", function() {
    var inputName = document.getElementsByClassName("label-input-div")[0].getElementsByTagName("input")[0];
    var inputLastName = document.getElementsByClassName("label-input-div")[1].getElementsByTagName("input")[0];
    var inputEmail = document.getElementsByClassName("label-input-div")[2].getElementsByTagName("input")[0];
    var inputTelephone = document.getElementsByClassName("label-input-div")[3].getElementsByTagName("input")[0];
    var inputNameValue = inputName.value;
    var inputLastNameValue = inputLastName.value;
    var inputEmailValue = inputEmail.value;
    var inputTelephoneValue = inputTelephone.value;

    //Checking The Name
    if (!inputNameValue.length) {
      if (!errorWithData) errorWithData = true;
      errorMessage += "\nName";
      inputIncompleteMessage(inputName);
    }

    //Checking the Last Name
    if (!inputLastNameValue.length) {
      if (!errorWithData) errorWithData = true;
      errorMessage += "\nLastName"
      inputIncompleteMessage(inputLastName);
    }

    //Checking the Email 
    if (inputEmailValue.indexOf("@") == -1) {
      if (!errorWithData) errorWithData = true;
      errorMessage += "\nEmail";
      inputIncompleteMessage(inputEmail);
    }

    //Checking The Telephone
    if (inputTelephoneValue.length < 8) {
      if (!errorWithData) errorWithData = true;
      errorMessage += "\nTelephone";
      inputIncompleteMessage(inputTelephone);
    }

    if (errorWithData) {
      alert(errorMessage);
      return false;
    } else {
      alert("data has been submitted");
    }

  });
}

function inputIncompleteMessage(inputIncomplete) {
  var inputParent = inputIncomplete.parentNode;
  var listOfChildrenOfThatParent = inputParent.children;
  var arrayListOfChildren = Array.from(listOfChildrenOfThatParent);
  for (var i = 0; i < arrayListOfChildren.length; i++) {
    if (arrayListOfChildren[i].localName === "label") {
      var labelElementofSelectedInput = arrayListOfChildren[i];
    }
    if (arrayListOfChildren[i].localName === "span") {
      var spanElementofSelectedInput = arrayListOfChildren[i];
    }
  }
  var labelContent = labelElementofSelectedInput.textContent;
  labelElementofSelectedInput.className += " error-input";
  spanElementofSelectedInput.className += " error-input";
  labelElementofSelectedInput.innerHTML = `Incorrect ${labelContent} entered`;
  if (labelElementofSelectedInput.style.display !== "block") {
    labelElementofSelectedInput.style.display = "block";
  }
}




