// Wait for the DOM to finish loading before running the game

document.addEventListener('DOMContentLoaded', function () {
    /**
     * Declare constants for Dom elements
     * and possible choices
     */
    const buttonsGames = document.getElementsByClassName("button");
    const playerImage = document.getElementById("player-img");
    const computerImage = document.getElementById("computer-img");
    const choices = ["rock", "paper", "scissors"];
    let messagePlayer = document.getElementById("message");
    let scorePlayer = document.getElementById("player-score");
    let scoreComputer = document.getElementById("computer-score");

    let scorePlayerPoints = 0;
    let scoreComputerPoints = 0;

    scorePlayer.textContent = 0;
    scoreComputer.textContent = 0;

    /**
     * Add eventlistener to all the buttonsGames
     */
    for (let button of buttonsGames) {
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

        winner(choices[indice], choices[computerChoice]);
    }

    /**
     * Check who the winner is
     */
    function winner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            messagePlayer.textContent = "Tie";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            messagePlayer.textContent = "Win";
            scorePlayerPoints = scorePlayerPoints + 1;
            scorePlayer.textContent = scorePlayerPoints;
        } else {
            messagePlayer.textContent = "Lose";
            scoreComputerPoints = scoreComputerPoints + 1;
            scoreComputer.textContent = scoreComputerPoints;
        }
    }
});