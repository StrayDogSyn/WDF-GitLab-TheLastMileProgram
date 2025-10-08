  let inputEnterXP;
  // DOM references
  let $saveExperience = document.getElementById("btnSaveXP");
  // event listeners
  $saveExperience.addEventListener('click', function () {
    saveExperienceValue();
  });

// function declarations
  function saveExperienceValue() {
    console.log("saveExperienceValue called");
  }

  function updateExperiencePoints() {
    inputEnterXP = localStorage.inputEnterXP;
  }