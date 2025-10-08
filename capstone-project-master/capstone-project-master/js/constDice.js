/* Knuckle Bones of Ficklest Fortunes
 * Tabletop RPG Dice Emulator
 * StrayDog Syndications L.L.C.
 * Copyright 2024
 * All Rights Reserved
 */
(function () {
  "use strict";
  /* Dice Constructors */
  class Dice20 {
    constructor(sides, totalModifiers) {
      this.sides = sides;
      this.totalModifiers = totalModifiers;
    }
    //getter
    get roll() {
      return this.rollDiceMethod();
    }
    //method
    rollDiceMethod() {
      let diceRoll = Math.floor(this.sides * Math.random() + 1);
      if (diceRoll === 1) {
        alert('Suck it Fumblina!!!');
        return diceRoll;
      } else {
        if (diceRoll === 20) {
          alert("You're a Natural... Twenty!");
          return diceRoll;
        } else {
          return (diceRoll + this.totalModifiers);
        }
      }
    }
  }// end Dice20
  class DiceX {
    constructor(sides, diceModifiers) {
      this.sides = sides;
      this.diceModifiers = diceModifiers;
    }
    //getter
    get roll() {
      return this.rollDiceMethod();
    }
    //method
    rollDiceMethod() {
      let diceRoll = Math.floor(this.sides * Math.random() + 1);
      return (diceRoll);
    }
  }
  /* end class Dice */
  let rainbow = [];
  let currentColor = 0;
  /* Dice Bag */
  // dFour
  const dFour = new DiceX(4);
  dFour.sides = 4;
  // dSix
  const dSix = new DiceX(6);
  dSix.sides = 6;
  // dEight
  const dEight = new DiceX(8);
  dEight.sides = 8;
  // dTen
  const dTen = new DiceX(10);
  dTen.sides = 10;
  // dTwelve
  const dTwelve = new DiceX(12);
  dTwelve.sides = 12;
  // dTwenty
  const dTwenty = new DiceX(20);
  dTwenty.sides = 20;
  // dPercent
  const dPercent = new DiceX(100);
  dPercent.sides = 100;
  /* bottom of bag */

  /* character-specific d20 rolls */
  const dTwentyMeleeOne = new Dice20(20);
  dTwentyMeleeOne.sides = 20;
  dTwentyMeleeOne.totalModifiers = 15;
  const dSixMeleeOneDmg = new DiceX(6);
  dSixMeleeOneDmg.sides = 6;
  dSixMeleeOneDmg.diceModifiers = 6;
  // end dTwentyMeleeOne
  const dTwentyMeleeTwo = new Dice20(20);
  dTwentyMeleeTwo.sides = 20;
  dTwentyMeleeTwo.totalModifiers = 10;
  const dSixMeleeTwoDmg = new DiceX(6);
  dSixMeleeTwoDmg.sides = 6;
  dSixMeleeTwoDmg.diceModifiers = 6;
  // end dTwentyMeleeTwo
  const dTwentyMeleeOneAlt = new Dice20(20);
  dTwentyMeleeOneAlt.sides = 20;
  dTwentyMeleeOneAlt.totalModifiers = 12;
  const dSixMeleeOneAltDmg = new DiceX(6);
  dSixMeleeOneAltDmg.sides = 6;
  dSixMeleeOneAltDmg.diceModifiers = 6;
  // end dTwentyMeleeOneAlt
  const dTwentyMeleeTwoAlt = new Dice20(20);
  dTwentyMeleeTwoAlt.sides = 20;
  dTwentyMeleeTwoAlt.totalModifiers = 7;
  const dSixMeleeTwoAltDmg = new DiceX(6);
  dSixMeleeTwoAltDmg.sides = 6;
  dSixMeleeTwoAltDmg.diceModifiers = 6;
  // end dTwentyMeleeTwoAlt
  const dTwentyRangedAtkOne = new Dice20(20);
  dTwentyRangedAtkOne.sides = 20;
  dTwentyRangedAtkOne.totalModifiers = 11;
  const dSixRangedOneDmg = new DiceX(6);
  dSixRangedOneDmg.sides = 6;
  dSixRangedOneDmg.diceModifiers = 6;
  // dTwentyRangedAtkOne
  const dTwentyRangedAtkTwo = new Dice20(20);
  dTwentyRangedAtkTwo.sides = 20;
  dTwentyRangedAtkTwo.totalModifiers = 11;
  const dSixRangedTwoDmg = new DiceX(6);
  dSixRangedTwoDmg.sides = 6;
  dSixRangedTwoDmg.diceModifiers = 6;
  // dTwentyRangedAtkTwo
  const dTwentyFortitudeSave = new Dice20(20);
  dTwentyFortitudeSave.sides = 20;
  dTwentyFortitudeSave.totalModifiers = 14;
  // dTwentyFortitudeSave
  const dTwentyReflexSave = new Dice20(20);
  dTwentyReflexSave.sides = 20;
  dTwentyReflexSave.totalModifiers = 4;
  // dTwentyReflexSave
  const dTwentyWillSave = new Dice20(20);
  dTwentyWillSave.sides = 20;
  dTwentyWillSave.totalModifiers = 10;
  // dTwentyWillSave
  const dTwentyPerceptionRoll = new Dice20(20);
  dTwentyPerceptionRoll.sides = 20;
  dTwentyPerceptionRoll.totalModifiers = 17;
  // dTwentyPerceptionRoll
  const dTwentyInitiativeRoll = new Dice20(20);
  dTwentyInitiativeRoll.sides = 20;
  dTwentyInitiativeRoll.totalModifiers = 8;
  // dTwentyInitiativeRoll
  const dTwentyCMBRoll = new Dice20(20);
  dTwentyCMBRoll.sides = 20;
  dTwentyCMBRoll.totalModifiers = 13;
  // dTwentyCMBRoll
  const dTwentyFlat = new Dice20(20);
  dTwentyFlat.sides = 20;
  dTwentyFlat.totalModifiers = 0;

  /* event listeners */
  $('#btnMeleeAtkOne').click(handleRollButtonClick20a1);
  $('#btnMeleeAtkOneDmg').click(handleRollButtonClick20a1);
  function handleRollButtonClick20a1() {
    $('#meleeAtkOne').html(dTwentyMeleeOne.roll);
    $('#meleeAtkOneDmg').html(dSixMeleeOneDmg.roll + dSixMeleeOneDmg.roll + dSixMeleeOneDmg.diceModifiers);
    $('#meleeAtkOneDmgType').html(dSixMeleeOneDmg.roll);
  }// handleRollButtonClick20a1 = (3d6 + 6) meleeAtkOneDmg

  $('#btnMeleeAtkTwo').click(handleRollButtonClick20b1);
  $('#btnMeleeAtkTwoDmg').click(handleRollButtonClick20b1);
  function handleRollButtonClick20b1() {
    $('#meleeAtkTwo').html(dTwentyMeleeTwo.roll);
    $('#meleeAtkTwoDmg').html(dSixMeleeTwoDmg.roll + dSixMeleeTwoDmg.roll + dSixMeleeTwoDmg.diceModifiers);
    $('#meleeAtkTwoDmgType').html(dSixMeleeTwoDmg.roll);
  }// handleRollButtonClick20b1 = (3d6 + 6) meleeAtkTwoDmg

  $('#btnMeleeAtkOneAlt').click(handleRollButtonClick20a2);
  $('#btnMeleeAtkOneAltDmg').click(handleRollButtonClick20a2);
  function handleRollButtonClick20a2() {
    $('#meleeAtkOneAlt').html(dTwentyMeleeOne.roll);
    $('#meleeAtkOneAltDmg').html(dSixMeleeOneDmg.roll + dSixMeleeOneDmg.diceModifiers);
  }// handleRollButtonClick20a2 = (1d6 + 6) meleeAtkOneAltDmg

  $('#btnMeleeAtkTwoAlt').click(handleRollButtonClick20b2);
  $('#btnMeleeAtkTwoAltDmg').click(handleRollButtonClick20b2);
  function handleRollButtonClick20b2() {
    $('#meleeAtkTwoAlt').html(dTwentyMeleeTwo.roll);
    $('#meleeAtkTwoAltDmg').html(dSixMeleeTwoDmg.roll + dSixMeleeTwoDmg.diceModifiers);
  }// handleRollButtonClick20b2 = (1d6 + 6) meleeAtkTwoAltDmg

  $('#btnRangedAtkOne').click(handleRollButtonClick20c1);
  $('#btnRangedAtkOneDmg').click(handleRollButtonClick20c1);
  function handleRollButtonClick20c1() {
    $('#rangedAtkOne').html(dTwentyRangedAtkOne.roll);
    $('#rangedAtkOneDmg').html(dSixRangedOneDmg.roll + dSixRangedOneDmg.diceModifiers);
    $('#rangedAtkOneDmgType').html(dSixRangedOneDmg.roll);
  }// handleRollButtonClick20c1 = (2d6 + 6) rangedAtkOneDmg

  $('#btnRangedAtkTwo').click(handleRollButtonClick20d);
  $('#btnRangedAtkTwoDmg').click(handleRollButtonClick20d);
  function handleRollButtonClick20d() {
    $('#rangedAtkTwo').html(dTwentyRangedAtkTwo.roll);
    $('#rangedAtkTwoDmg').html(dSixRangedTwoDmg.roll + dSixRangedTwoDmg.diceModifiers);
    $('#rangedAtkTwoDmgType').html(dSixRangedTwoDmg.roll);
  }// handleRollButtonClick20d = (2d6 + 6) rangedAtkOneDmg

  $('#btnFortSave').click(handleRollButtonClick20e);
  function handleRollButtonClick20e() {
    $('#fortitudeSave').html(dTwentyFortitudeSave.roll);
  }// handleRollButtonClick20e = fortitude save
  $('#btnReflexSave').click(handleRollButtonClick20f);
  function handleRollButtonClick20f() {
    $('#reflexSave').html(dTwentyReflexSave.roll);
  }// handleRollButtonClick20f = reflex save
  $('#btnWillSave').click(handleRollButtonClick20g);
  function handleRollButtonClick20g() {
    $('#willSave').html(dTwentyReflexSave.roll);
  }// handleRollButtonClick20g = will save
  $('#btnPerception').click(handleRollButtonClick20h);
  function handleRollButtonClick20h() {
    $('#perceptionRoll').html(dTwentyPerceptionRoll.roll);
  }// handleRollButtonClick20h = perception roll
  $('#btnInitiative').click(handleRollButtonClick20i);
  function handleRollButtonClick20i() {
    $('#initiativeRoll').html(dTwentyInitiativeRoll.roll);
  }// handleRollButtonClick20i = intiative roll
  $('#btnCombatBonus').click(handleRollButtonClick20k);
  function handleRollButtonClick20k() {
    $('#combatManeuverBonus').html(dTwentyCMBRoll.roll);
  }// handleRollButtonClick20k = combat maneuver roll
  $('#btnFlatRoll').click(handleRollButtonClick20j);
  function handleRollButtonClick20j() {
    $('#flatD20Roll').html(dTwentyFlat.roll);
  }// handleRollButtonClick20j = flat d20 roll
}());