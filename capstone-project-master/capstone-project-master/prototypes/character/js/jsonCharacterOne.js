//  declare character variables
  let characterNameEditor;
  let characterClass01Editor;
  let characterClass02Editor;
  let characterClass03Editor;
  let characterClass04Editor;
  let characterHomelandEditor;
  let characterRaceEditor;
  let characterAncestryEditor;
  let characterBackgroundEditor;
  let characterFactionEditor;
  let characterAlignmentEditor;
  let characterDeityEditor;
  let characterLanguageEditor;
  let characterSizeEditor;
  let characterHeightEditor;
  let characterWeightEditor;
  let characterAgeEditor;
  let characterGenderEditor;
  let characterEyesEditor;
  let characterHairEditor;

// DOM references
  let $saveCharacterEdit = document.getElementById("saveCharacterEdit");

// call data from local storage when page loads
  loadCharacterInfo();

// event listeners
  $saveCharacterEdit.addEventListener('click', function () {
    saveCharacterPage();
    updateCharacterPage();
  });

// save function for character information page
function saveCharacterPage() {
  console.log("saveCharacterPage() called");
}

// update page function
function updateCharacterPage() {
  console.log("updateCharacterPage() called");

}

// constructor function for saving/loading character information
  function loadCharacterInfo() {
    console.log("loadCharacterInfo() called");
    characterNameEditor = localStorage.characterNameEditor;
    characterClass01Editor = localStorage.characterClass01Editor;
    characterClass02Editor = localStorage.characterClass02Editor;
    characterClass03Editor = localStorage.characterClass03Editor;
    characterClass04Editor = localStorage.characterClass04Editor;
    characterHomelandEditor = localStorage.characterHomelandEditor;
    characterRaceEditor = localStorage.characterRaceEditor;
    characterAncestryEditor = localStorage.characterAncestryEditor;
    characterBackgroundEditor = localStorage.characterBackgroundEditor;
    characterFactionEditor = localStorage.characterFactionEditor;
    characterAlignmentEditor = localStorage.characterAlignmentEditor;
    characterDeityEditor = localStorage.characterDeityEditor;
    characterLanguageEditor = localStorage.characterLanguageEditor;
    characterSizeEditor = localStorage.characterSizeEditor;
    characterHeightEditor = localStorage.characterHeightEditor;
    characterWeightEditor = localStorage.characterWeightEditor;
    characterAgeEditor = localStorage.characterAgeEditor;
    characterGenderEditor = localStorage.characterGenderEditor;
    characterEyesEditor = localStorage.characterEyesEditor;
    characterHairEditor = localStorage.characterHairEditor;
}

