module.exports = {
  checkingCharacterInString: function(stringToCheck, CharacterToFind) {
    if (stringToCheck.indexOf(CharacterToFind) != -1) {
      return true;
    } else {
      return false;
    }
  },

  countingCharacters: function(singleCharacter, string) {
    let contadorCharacter = 0;
    for (var i = 0; i < string.length; i++) {
      let characterInString = string.charAt(i);
      if (characterInString == singleCharacter) {
        contadorCharacter++;
      }
    }
    return contadorCharacter;
  },

  listOfNumbers: function(numberElements) {
    let contador = 1;
    let finalList = [];
    while (contador <= numberElements.length) {
      finalList.push(contador);
      contador++;
    }
    return finalList;
  },

  listStatusCodes: function() {
    return require("http").STATUS_CODES;
  },

  findView: function(viewName, viewList) {
    let contador = 0;
    let found = false;
    while (contador < viewList.length) {
      let singleView = viewList[contador];
      if (singleView === viewName) return contador;
      contador++;
    }
    return false;
  },

  stringEntireLowercase(string) {
    let finalString = "";
    for (var i = 0; i < string.length; i++) {
      let characterString = string.charAt(i);
      finalString += characterString.toLowerCase();
    }
    return finalString;
  },

  checkElementListAnotherList(firstList, secondList, stringListReturnPosition) {
    let primerContador = 0;
    let shareElement = null;
    if (!Array.isArray(firstList)) throw Error("first parameter is not an Array");
    if (!Array.isArray(secondList)) throw Error("second parameter is not an Array");
    if (stringListReturnPosition < 1 || stringListReturnPosition > 2) throw Error("stringListReturnPosition parameter has to be integer 1 or 2");
    while (primerContador < firstList.length) {
      let elemento = firstList[primerContador];
      let segundoContador = 0;
      while (segundoContador < secondList.length) {
        let segundoElemento = secondList[segundoContador];
        if (elemento === segundoElemento) {
          console.log("primer elemento" + elemento, "segundo elemento" + segundoElemento);
          if (stringListReturnPosition === 1) {
            shareElement = primerContador;
          } else if (stringListReturnPosition === 2) {
            shareElement = segundoContador;
          }
        }
        segundoContador++;
      }
      primerContador++;
    }
    console.log("posicion" + shareElement);
    return shareElement;
  }

}
