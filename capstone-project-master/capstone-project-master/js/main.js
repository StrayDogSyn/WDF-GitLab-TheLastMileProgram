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
    $('#result').text(dFour.roll);
  } // 1d4 //
  $('#d6').click(handleRoll6);
    function handleRoll6() {
    $('#result').text(dSix.roll);
  } // 1d6 //
  $('#d8').click(handleRoll8);
    function handleRoll8() {
    $('#result').text(dEight.roll);
  } // 1d8 //
  $('#d10').click(handleRoll10);
    function handleRoll10() {
    $('#result').text(dTen.roll);
  } // 1d10 //
  $('#d12').click(handleRoll12);
    function handleRoll12() {
    $('#result').text(dTwelve.roll);
  } // 1d12 //
  $('#d20').click(handleRoll20);
    function handleRoll20() {
    $('#result').text(dTwenty.roll);
  } // 1d20 //

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
    $('#edit').toggle();
        /* attr = readonly class="form-control-plaintext" */
    if($('#gridCheck:checked')){
      } else {
        // toggle read-only attribute for editor inputs //
      }
  }


});

  ///////////////////////////////
  // => end ready / use strict //
  // => see readme.md          //
  // => works cited page       //
  ///////////////////////////////