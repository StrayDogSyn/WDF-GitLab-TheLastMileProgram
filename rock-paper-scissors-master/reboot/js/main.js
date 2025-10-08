//////////////////////////////////////////
// *  Advanced Rock, Paper, Scissors  * //
// *  RI-JJM-6 Eric H. Petross        * //
// *  See README.md for Works Cited   * //
//////////////////////////////////////////

$(() => {
  "use strict";

  //////////////////////
  //* DOM References *//
  //////////////////////

  const Rock = document.getElementById('Rock');
  const Paper = document.getElementById('Paper');
  const Scissors = document.getElementById('Scissors');
  const Lizard = document.getElementById('Lizard');
  const Spock = document.getElementById('Spock');
  const $feedback = document.getElementById('feedback');
  const $replay = document.getElementById('play-again');
  const $opponent = document.getElementById('opponent');
  const $player = document.getElementById('player');
  const $score = document.getElementById('score');


  ////////////////////////
  //* Default Settings *//
  ////////////////////////

  let selectionMade = false;
  const picked = [
    'rock', 'paper', 'scissors', 'lizard', 'spock'
  ];
  let score = 0;
  let currentScore = window.sessionStorage.getItem('score');
  currentScore = score;
  $('#play-again').hide(), $('#reset').hide();

  ///////////////////////
  //* Event Listeners *//
  ///////////////////////

 $(Rock).on('click', () => {
    if (!selectionMade) playerPick('rock');
  });
 $(Paper).on('click', () => {
    if (!selectionMade) playerPick('paper');
  });
 $(Scissors).on('click', () => {
    if (!selectionMade) playerPick('scissors');
  });
 $(Lizard).on('click', () => {
    if (!selectionMade) playerPick('lizard');
  });
 $(Spock).on('click', () => {
    if (!selectionMade) playerPick('spock');
  });
  $('#play-again').on('click', replayGame);
  $('#reset').on('click', (evt) => {
    evt.preventDefault();
    window.location.reload();
  });

  //////////////////////////////
  // Keypress Event Listeners //
  //////////////////////////////

  window.addEventListener('keydown', function (event) {
    if (event.defaultPrevented) {
      return;
      // does nothing if the event was already processed //
    }
    switch (event.key) {
      case 'r':
        if (!selectionMade) playerPick('rock');
        break;
      case 'p':
        if (!selectionMade) playerPick('paper');
        break;
      case 's':
        if (!selectionMade) playerPick('scissors');
        break;
      case 'l':
        if (!selectionMade) playerPick('lizard');
        break;
      case 'k':
        if (!selectionMade) playerPick('spock');
        break;
      case '/':
        // reveal/hide keyboard shortcut menu //
        $('#toggle').click();
        break;
      case 'n':
        replayGame();
        break;
      case 'Enter':
        $('#btn-rules').click();
        break;
      case 'Escape':
        window.location.reload();
        break;
      default:
        return;
      // quit whenever this fails to handle event //
    }
    // cancels the default action to avoid it being handled twice //
    event.preventDefault();
  }, true);

  ///////////////////////////
  // Function Declarations //
  ///////////////////////////

  const update = (element, content) => {
    element.innerText = content;
  };
  const computerPick = () => {
    let random = picked[Math.floor(Math.random() * 5)];
    return random;
  };
  // regular allows function to be hoisted //
  function playerPick(value) {
    playGame(value), computerPick();
  }

function playGame(value) {
  $('#play-again').hide();
  selectionMade = true;
  const random = computerPick();
  declareWinner(value, random);
  // determines the winner
  update($player, `You chose ${value}!`);
  update($opponent, `The house chose ${random}!`);

  function declareWinner(value, random) {
    if(value === 'rock') {
      if (random === 'scissors' || random === 'lizard'){
      updateScore('win');
      } else if(random === 'paper' || random === 'spock') {
        updateScore('lose');
      } else {
        updateScore('tie');
      }
    }
    if(value === 'paper') {
      if (random === 'rock' || random === 'spock'){
      updateScore('win');
      } else if(random === 'scissors' || random === 'lizard') {
        updateScore('lose');
      } else {
        updateScore('tie');
      }
    }
    if(value === 'scissors') {
      if (random === 'paper' || random === 'lizard'){
      updateScore('win');
      } else if(random === 'rock' || random === 'spock') {
        updateScore('lose');
      } else {
        updateScore('tie');
      }
    }
    if(value === 'lizard'){
      if (random === 'spock' || random === 'paper'){
      updateScore('win');
      } else if(random === 'rock' || random === 'scissors'){
        updateScore('lose');
      } else {
        updateScore('tie');
      }
    }
    if(value === 'spock'){
      if (random === 'scissors' || random === 'rock'){
      updateScore('win');
      } else if (random === 'lizard' || random === 'paper'){
        updateScore('lose');
      } else {
        updateScore('tie');
      }
    }
  }
}
  let updateScore = (result) => {
    updateMessage(result);
    if(result === 'win'){
      score ++;
      currentScore += 1;
      update($score, score);
    } else if (result === 'lose'){
      score --;
      currentScore -= 1;
      update($score, score);
    }
    // first to ten points wins match //
    if (score >= 10 || score <= -10){
      gameOver(score);
    }
    sessionStorage.setItem('score', currentScore);
    console.log(currentScore);
  };
  function updateMessage(result){
    update($feedback, `You ${result}!!!`);
    $('#play-again').show();
  }
  function replayGame(value, random) {
    const player = playerPick();
    const opponent = computerPick();
    selectionMade = false;
    update($feedback, "Choose Again?!");
    update($player, `...`);
    update($opponent, `...`);
  }
  function gameOver(score){
    $('#play-again').hide(), $('#game').hide();
    $('#reset').show();
    if(score > 10){
    update($feedback, `You're the Winner! \n Thanks for playing!`);
    } else {
    update($feedback, `You lost! \n Better luck next time!`);
    }
  }
});
