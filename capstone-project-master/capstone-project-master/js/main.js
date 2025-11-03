/////////////////////////////////////////////////////
//* The Knuckle Bones of the Ficklest of Fortunes *//
//* The Last Mile Capstone Project                *//
//* RI-JJM-6 E. Hunter Petross                    *//
//* StrayDog Syndications LLC 2024                *//
//* All Rights Reserved                           *//
/////////////////////////////////////////////////////

$(() => {
  "use strict";

  //////////////////////
  //* DOM References *//
  //////////////////////

  const $splash = $('#splash');
  const $main = $('#main-page');

  /////////////////////////////
  //* Default Page Settings *//
  /////////////////////////////

  $('#main-page').hide();
  $('#splash').show(), $('#brand-logo').show();
  $('#exp').hide(), $('#feed').hide(), $('#Main').hide();
  $('#charClassesTwo').hide(), $('#charClassesThree').hide();

  /////////////////////////////////
  //* Character Data Management *//
  /////////////////////////////////

  // Load character data on page init
  function loadCharacterData() {
    const savedCharacter = localStorage.getItem('knucklebonesCharacter');
    if (savedCharacter) {
      try {
        const character = JSON.parse(savedCharacter);
        // Populate form fields
        $('#charName').val(character.name || '');
        $('#charAncestry').val(character.ancestry || '');
        $('#charHeritage').val(character.heritage || '');
        $('#charBackground').val(character.background || '');
        $('#charClassOne').val(character.classOne || '');
        $('#charLevelOne').val(character.levelOne || 1);
        $('#charClassTwo').val(character.classTwo || '');
        $('#charLevelTwo').val(character.levelTwo || 1);
        $('#charClassThree').val(character.classThree || '');
        $('#charLevelThree').val(character.levelThree || 1);
        
        // Update header display
        updateCharacterDisplay(character);
        
        // Show multi-class fields if needed
        if (character.classTwo) {
          $('#charMultiClassAdd').prop('checked', true);
          $('#charClassesTwo').show();
        }
        if (character.classThree) {
          $('#charMultiClassAdded').prop('checked', true);
          $('#charClassesThree').show();
        }
      } catch (error) {
        console.error('Error loading character data:', error);
      }
    }
  }

  // Update character display in header
  function updateCharacterDisplay(character) {
    const name = character.name || 'Character Name';
    const level = character.levelOne || '1';
    const characterClass = character.classOne || 'Class';
    
    $('#characterName').text(name);
    $('#characterLevel').text(level);
    $('#characterClass').text(characterClass);
  }

  // Save character data
  function saveCharacterData() {
    const character = {
      name: $('#charName').val(),
      ancestry: $('#charAncestry').val(),
      heritage: $('#charHeritage').val(),
      background: $('#charBackground').val(),
      classOne: $('#charClassOne').val(),
      levelOne: $('#charLevelOne').val(),
      classTwo: $('#charClassTwo').val(),
      levelTwo: $('#charLevelTwo').val(),
      classThree: $('#charClassThree').val(),
      levelThree: $('#charLevelThree').val()
    };
    
    try {
      localStorage.setItem('knucklebonesCharacter', JSON.stringify(character));
      updateCharacterDisplay(character);
      
      // Show success feedback
      const $submitBtn = $('#charQuickglanceSubmit');
      const originalText = $submitBtn.html();
      $submitBtn.html('<i class="fa fa-check"></i> Saved!');
      setTimeout(() => {
        $submitBtn.html(originalText);
      }, 2000);
      
      return true;
    } catch (error) {
      console.error('Error saving character data:', error);
      alert('Error saving character data. Please try again.');
      return false;
    }
  }

  // Validate character form
  function validateCharacterForm() {
    const name = $('#charName').val().trim();
    const classOne = $('#charClassOne').val().trim();
    const levelOne = $('#charLevelOne').val();
    
    if (!name) {
      alert('Please enter a character name.');
      $('#charName').focus();
      return false;
    }
    
    if (!classOne) {
      alert('Please enter at least one character class.');
      $('#charClassOne').focus();
      return false;
    }
    
    if (!levelOne || levelOne < 1 || levelOne > 20) {
      alert('Please enter a valid level (1-20).');
      $('#charLevelOne').focus();
      return false;
    }
    
    return true;
  }

  // Initialize character data on page load
  loadCharacterData();

  ////////////////
  // Class Dice //
  ////////////////

  class Dice {
      constructor(sides) {
          this.sides = sides;
      }
      //getter
      get roll() {
          return this.rollDiceMethod();
      }
      //method
      rollDiceMethod() {
          return Math.floor(this.sides * Math.random() + 1);
      }
  }
  // dice
  const dTwo = new Dice(2);
  dTwo.sides = 2;
  // dTwo
  const dThree = new Dice(3);
  dThree.sides = 3;
  // dThree
  const dFour = new Dice(4);
  dFour.sides = 4;
  // dFour
  const dSix = new Dice(6);
  dSix.sides = 6;
  // dSix
  const dEight = new Dice(8);
  dEight.sides = 8;
  // dEight
  const dTen = new Dice(10);
  dTen.sides = 10;
  // dTen
  const dTwelve = new Dice(12);
  dTwelve.sides = 12;
  // dTwelve
  const dTwenty = new Dice(20);
  dTwenty.sides = 20;
  // dTwenty
  const dPercent = new Dice(100);
  dPercent.sides = 100;

  // call dice functions
  dThree.roll;
  dFour.roll;
  dSix.roll;
  dEight.roll;
  dTen.roll;
  dTwelve.roll;
  dTwenty.roll;
  dPercent.roll;

  ///////////////////////
  //* Event Listeners *//
  ///////////////////////

  // Login/Enter button handlers
  $('#login-button').on('click', () => {
    $('#splash').hide(), $('#brand-logo').hide(), $('#splash-footer').hide(),
      $('#main-page').show(), $('#Main').show(), $('#exp').show();
    $('html').removeClass('background-page');
  });

  $('#enter-button').on('click', () => {
    $('#splash').hide(), $('#brand-logo').hide(), $('#splash-footer').hide(),
      $('#main-page').show(), $('#Main').show(), $('#exp').show();
    $('html').removeClass('background-page');
  });

  $('#guest-button').on('click', () => {
    $('#splash').hide(), $('#brand-logo').hide(), $('#splash-footer').hide(),
      $('#main-page').show(), $('#Main').show(), $('#exp').show();
    $('html').removeClass('background-page');
  });

  // Character form submission
  $('#charQuickglanceSubmit').on('click', () => {
    if (validateCharacterForm()) {
      if (saveCharacterData()) {
        // Close modal after successful save
        setTimeout(() => {
          $('#playerEditorModal').modal('hide');
        }, 1500);
      }
    }
  });

  // Multi-class checkbox handlers
  $('#charMultiClassAdd').on('change', function() {
    if ($(this).is(':checked')) {
      $('#charClassesTwo').slideDown();
    } else {
      $('#charClassesTwo').slideUp();
      // Clear second class fields
      $('#charClassTwo').val('');
      $('#charLevelTwo').val(1);
      $('#charMultiClassAdded').prop('checked', false);
      $('#charClassesThree').hide();
    }
  });

  $('#charMultiClassAdded').on('change', function() {
    if ($(this).is(':checked')) {
      $('#charClassesThree').slideDown();
    } else {
      $('#charClassesThree').slideUp();
      // Clear third class fields
      $('#charClassThree').val('');
      $('#charLevelThree').val(1);
    }
  });

  $('#gridCheck').click(lockEditor);
  $('#btn-feed').on('click', () =>{
    $('#exp').toggle(), $('#feed').toggle(), $('#Main').toggle();
  });
  $('#toggler').on('click', () => {
    $('#exp').toggle(), $('#feed').hide(), $('#Main').toggle();
  });
  $('#diceBag').on('click', (evt) => {
    evt.preventDefault();
    $('#quick-dice').click();
  });

  $('#d4').click(handleRoll4);
    function handleRoll4() {
    const result = dFour.roll;
    $('#result').text(result);
    animateDiceRoll(result);
  } // 1d4 //
  $('#d6').click(handleRoll6);
    function handleRoll6() {
    const result = dSix.roll;
    $('#result').text(result);
    animateDiceRoll(result);
  } // 1d6 //
  $('#d8').click(handleRoll8);
    function handleRoll8() {
    const result = dEight.roll;
    $('#result').text(result);
    animateDiceRoll(result);
  } // 1d8 //
  $('#d10').click(handleRoll10);
    function handleRoll10() {
    const result = dTen.roll;
    $('#result').text(result);
    animateDiceRoll(result);
  } // 1d10 //
  $('#d12').click(handleRoll12);
    function handleRoll12() {
    const result = dTwelve.roll;
    $('#result').text(result);
    animateDiceRoll(result);
  } // 1d12 //
  $('#d20').click(handleRoll20);
    function handleRoll20() {
    const result = dTwenty.roll;
    $('#result').text(result);
    animateDiceRoll(result);
  } // 1d20 //

  // Dice roll animation
  function animateDiceRoll(result) {
    $('#diceResult').addClass('pulse');
    setTimeout(() => {
      $('#diceResult').removeClass('pulse');
    }, 600);
  }

  ///////////////////////
  //* Semantic Events *//
  ///////////////////////

  // code adapted from https://static-web.tlm.cloud/track_2.0/Semantic-UI-examples/semantic_kitchen_sink/All%20UI%20_%20Semantic%20UI.htm#/first //

 let progress = function() {
  $('#eg').progress('increment');
  setTimeout(progress, (Math.random() * 2000) + 300);
    };
    setTimeout(progress, 1000);

    setInterval(function() {
  $('#eg').progress('reset');
    }, 17500);
  $('.demo .example .ui.accordion').accordion();

      var
  $demo            = $('.shape.demos .ui.shape'),
  $directionButton = $('.shape.demos .direction .button'),
  handler;

      // event handlers //
      handler = {
  rotate: function() {
    var
      $shape    = $(this).closest('.buttons').prevAll('.ui.shape').eq(0),
      direction = $(this).data('direction') || false,
      animation = $(this).data('animation') || false;
    if(direction && animation) {
      $shape
        .shape(animation + '.' + direction);
      }
    }
      };

    // attach events //
    $demo
    .shape()
      ;
      $directionButton
    .on('click', handler.rotate)
    .popup({
    position  : 'bottom center'
    });

    // transition events //
    $('.transition.demo .button').on('click', function() {
    var animation = $(this).text();
    if(typeof animation == 'string') {
      animation = animation.toLowerCase();
    }
    $('.transition.demo .image').transition({
        animation: animation,
        interval: 200
      });
  });

  /////////////////////////////
  //* Function Declarations *//
  /////////////////////////////

  function lockEditor() {
    // toggles lock icon open/close //
    $('#lockOpen').toggleClass('fa-lock-open').toggleClass('fa-lock');
    
    // Get all form inputs in the character editor
    const $formInputs = $('#characterQuickglance').find('input, select, textarea');
    
    if($('#gridCheck').is(':checked')) {
      // Lock the form - make fields readonly
      $formInputs.each(function() {
        if ($(this).attr('type') !== 'checkbox') {
          $(this).prop('readonly', true);
          $(this).addClass('form-control-plaintext');
          $(this).removeClass('form-control');
        }
      });
      $('#charQuickglanceSubmit').prop('disabled', true);
    } else {
      // Unlock the form - make fields editable
      $formInputs.each(function() {
        if ($(this).attr('type') !== 'checkbox') {
          $(this).prop('readonly', false);
          $(this).removeClass('form-control-plaintext');
          $(this).addClass('form-control');
        }
      });
      $('#charQuickglanceSubmit').prop('disabled', false);
    }
  }


});

  ///////////////////////////////
  // => end ready / use strict //
  // => see readme.md          //
  // => works cited page       //
  ///////////////////////////////