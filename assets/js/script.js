// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them


document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type")) {
              let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
        }

    runGame("xxxxxxxxxxxxxxxxxxxxxxxxxxxx");
}); 

/**
 * The main game "loop", called when the script is first loaded
 * and after user's answer has been processed
 */
function runGame(gameType) {

}

function incrementPlayerScore {

}

function incrementComputerScore {

}

function displayPlayerChoice {

}

function displayComputerChoice {
    
}

