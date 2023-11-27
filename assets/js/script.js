/**
 * Declare constants for Dom elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("button");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-img");
const computerImage = document.getElementById("computer-img");
const choices = ["rock", "paper", "scissors"];


/**
 * Add eventlistener to all the buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-type");
        playGame(playerChoice);
    });
}

/**
 * Game function. Accepts the chosen value of the selected button
 */
function playGame(playerChoice) {
    const indice = choices.indexOf(playerChoice);

    playerImage.src = `assets/images/${choices[indice]}.png`;
    playerImage.alt = choices[indice];

    const computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = winner(choices[computerChoice], choices[playerChoice]);

    updateScore(result);
}

/**
 * Check who the winner is
 */
function winner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        alert("Tie");
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("Win");
    } else {
        alert("Lose");
    }
}

/**
 * Update scores
 */
function updateScore(result) {
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
        button.addEventListener("click", function () {
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

        let result = winner(choices[computerChoice], choices[playerChoice]);

        updateScore(result);
    }

    /**
     * Check who the winner is
     */
    function winner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            alert("Tie");
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            alert("Win");
        } else {
            alert("Lose");
        }
    }

    /**
     * Update scores
     */
    function updateScore(result) {

        let playerScoreValue = parseInt(playerScore.innerText);
        let computerScoreValue = parseInt(computerScore.innerText);

        if (result === "Win") {
            playerScoreValue++;
        } else if (result === "Lose") {
            computerScoreValue++;
        }
    }

    let playerScoreValue = parseInt(playerScore.innerText);
    let computerScoreValue = parseInt(computerScore.innerText);

    if (result === "Win") {
        playerScoreValue++;
    } else if (result === "Lose") {
        computerScoreValue++;
    }
}