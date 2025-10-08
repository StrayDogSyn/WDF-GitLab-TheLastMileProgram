$(() => {
  "use strict";

  //////////////////////
  //* DOM References *//
  //////////////////////

const $quickglance = document.getElementById('#characterQuickglance');
let $characterName = document.getElementById('#characterName');
let $characterClass = document.getElementById('#characterClass');
let $characterLevel = document.getElementById('#characterLevel');
let $classOne = document.getElementById('#charClassOne');
let $classTwo = document.getElementById('#charClassTwo');
let $classThree = document.getElementById('#charClassThree');
let $levelOne = document.getElementById('#charLevelOne');
let $levelTwo = document.getElementById('#charLevelTwo');
let $levelThree = document.getElementById('#charLevelThree');

class Character {
  constructor(charName, charClassOne, charClassTwo, charClassThree, charAncestry, charHeritage, charBackground, charCity, charRace, charAlignment, charDeity, charLevelOne, charLevelTwo, charLevelThree){
    this.charName = charName;
    this.charClassOne = charClassOne;
    this.charClassTwo = charClassTwo;
    this.charClassThree = charClassThree;
    this.charAncestry = charAncestry;
    this.charHeritage = charHeritage;
    this.charBackground = charBackground;
    this.charCity = charCity;
    this.charRace = charRace;
    this.charAlignment = charAlignment;
    this.charDeity = charDeity;
    this.charLevelOne = charLevelOne;
    this.charLevelTwo = charLevelTwo;
    this.charLevelThree = charLevelThree;
  }
  // call the Dice method for character-specific rolls here //

}
  //////////////////////////////////
  //* Current Character Database *//
  //////////////////////////////////

  const currentCharacter = [ ];
  const characterStorage = window.localStorage;

  ////////////////////////
  //* Default Settings *//
  ////////////////////////

  $('#charClassesTwo').hide(), $('#charClassesThree').hide();

  ///////////////////////
  //* Event Listeners *//
  ///////////////////////

  $('#charQuickglanceSubmit').on('click', updateQuickCharacter);
  $('#charMultiClassAdd').on('click', () =>{ $('#charClassesTwo').toggle()});
  $('#charMultiClassAdded').on('click', () =>{ $('#charClassesThree').toggle()});

  ///////////////////////////
  // Function Declarations //
  ///////////////////////////

  function update(element, content) {
    element.innerHTML = content;
  }

  function updateQuickCharacter(){
    let charName = $('#charName').val();
    let charClassOne = $('#charClassOne').val();
    let charClassTwo = $('#charClassTwo').val();
    let charClassThree = $('#charClassThree').val();
    let charAncestry = $('#charAncestry').val();
    let charHeritage = $('#charHeritage').val();
    let charBackground = $('#charBackground').val();
    let charCity = $('#charCity').val();
    let charRace = $('#charRace').val();
    let charAlignment = $('#charAlignment').val();
    let charDeity = $('#charDeity').val();
    let charLevelOne = $('#charLevelOne').val();
    let charLevelTwo = $('#charLevelTwo').val();
    let charLevelThree = $('#charLevelThree').val();

    let updatedCharacter = new Character(charName, charClassOne, charClassTwo, charClassThree, charAncestry, charHeritage, charBackground, charCity, charRace, charAlignment, charDeity, charLevelOne, charLevelTwo, charLevelThree);


    console.log(updatedCharacter);
    console.log(characterStorage);
    populateStorage(updatedCharacter);
    return(currentCharacter.push(updatedCharacter));
  }

  ///////////////////////////////
  //* Local Storage Functions *//
  ///////////////////////////////

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

function populateStorage() {
  localStorage.setItem('charName', document.getElementById('charName').value);
  localStorage.setItem('charClassOne', document.getElementById('charClassOne').value);
  localStorage.setItem('charClassTwo', document.getElementById('charClassTwo').value);
  localStorage.setItem('charClassThree', document.getElementById('charClassThree').value);
  localStorage.setItem('charAncestry', document.getElementById('charAncestry').value);
  localStorage.setItem('charHeritage', document.getElementById('charHeritage').value);
  localStorage.setItem('charBackground', document.getElementById('charBackground').value);
  localStorage.setItem('charCity', document.getElementById('charCity').value);
  localStorage.setItem('charRace', document.getElementById('charRace').value);
  localStorage.setItem('charAlignment', document.getElementById('charAlignment').value);
  localStorage.setItem('charDeity', document.getElementById('charDeity').value);
  localStorage.setItem('charLevelOne', document.getElementById('charLevelOne').value);
  localStorage.setItem('charLevelTwo', document.getElementById('charLevelTwo').value);
  localStorage.setItem('charLevelThree', document.getElementById('charLevelThree').value);
  console.log(characterStorage);
  // update HTML with saved character statistics //
}


});

  ///////////////////////////////
  // => end ready / use strict //
  // => see readme.md          //
  // => works cited page       //
  ///////////////////////////////