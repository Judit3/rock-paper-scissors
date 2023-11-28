
document.addEventListener('DOMContentLoaded', function () {
    /**
     * Declare constants for Dom elements
     * and possible choices
     */
    const buttonsGames = document.getElementsByClassName("button");
    const playerScore = document.getElementById("player-score");
    const computerScore = document.getElementById("computer-score");
    const playerImage = document.getElementById("player-img");
    const computerImage = document.getElementById("computer-img");
    const choices = ["rock", "paper", "scissors"];
    let messagePlayer = document.getElementById("message");

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

        let result = winner(choices[indice], choices[computerChoice]);

        updateScore(result);
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
        } else {
            messagePlayer.textContent = "Lose";
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

});