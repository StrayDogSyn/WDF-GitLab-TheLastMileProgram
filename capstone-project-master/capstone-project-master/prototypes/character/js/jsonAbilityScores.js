// Strength
let scoreStr;
let modifierStr;
let tempScoreStr;
let tempModStr;
// Dexterity
let scoreDex;
let modifierDex;
let tempScoreDex;
let tempModDex;
// Constitution
let scoreCon;
let modifierCon;
let tempScoreCon;
let tempModCon;
// Intelligence
let scoreInt;
let modifierInt;
let tempScoreInt;
let tempModInt;
// Wisdom
let scoreWis;
let modifierWis;
let tempScoreWis;
let tempModWis;
// Charisma
let scoreCha;
let modifierCha;
let tempScoreCha;
let tempModCha;

// call data from local storage when page loads
characterAbilityScores();

// constructor function for saving/loading character information
function characterAbilityScores() {
    // Strength
    scoreStr = localStorage.scoreStr;
    modifierStr = localStorage.modifierStr;
    tempScoreStr = localStorage.tempScoreStr;
    tempModStr = localStorage.tempModStr;
    // Dexterity
    scoreDex = localStorage.scoreDex;
    modifierDex = localStorage.modifierDex;
    tempScoreDex = localStorage.tempScoreDex;
    tempModDex = localStorage.tempModDex;
    // Constitution
    scoreCon = localStorage.scoreCon;
    modifierCon = localStorage.modifierCon;
    tempScoreCon = localStorage.tempScoreCon;
    tempModCon = localStorage.tempModCon;
    // Intelligence
    scoreInt = localStorage.scoreInt;
    modifierInt = localStorage.modifierInt;
    tempScoreInt = localStorage.tempScoreInt;
    tempModInt = localStorage.tempModInt;
    // Wisdom
    scoreWis = localStorage.scoreWis;
    modifierWis = localStorage.modifierWis;
    tempScoreWis = localStorage.tempScoreWis;
    tempModWis = localStorage.tempModWis;
    // Charisma
    scoreCha = localStorage.scoreCha;
    modifierCha = localStorage.modifierCha;
    tempScoreCha = localStorage.tempScoreCha;
    tempModCha = localStorage.tempModCha;

}