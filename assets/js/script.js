/**
 * Declare constants for Dom elements
 * and possible choices
 */
let buttons = document.getElementsByClassName("button");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let playerImage = document.getElementById("player-img");
let computerImage = document.getElementById("computer-img");
let choices = ["rock", "paper", "scissors"];

/**
 * Add eventlistener to all the buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function(){
        let playerChoice = this.getAttribute("data-type");
        playGame(playerChoice);
    });
}

/**
 * Game function. Accepts the chosen value of the selected button
 */
function playGame(playerChoice) {
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = winner(choices[computerChoice], choices[playerChoice]):

    updateScore(result);
}

/**
 * Check who the winner is
 */

function winner()