//when a round is started, have the computer return a random choice of either rock paper or scissors//


function getComputerChoice() {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    let choiceArray = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return choiceArray
}

//play a round** take player in put - rock papaer scissors, store user input. computer input will be the get computer choice function. return the winner//



function playRound(computerSelection, playerSelection,) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("make your selection");
    if (playerSelection === computerSelection) {
        return ("draw")
    } else if (playerSelection === 'Rock' && computerSelection === "Scissors"){ 
        return ("you win, Rock beats Scissors!");
    } else if (playerSelection === 'Paper' && computerSelection === "Rock"){ 
        return ("you win, Paper beats Rock!");
    } else if (playerSelection === 'Scissors' && computerSelection === "Paper"){ 
        return ("you win, Scissors beats Paper!");    
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return ("you lose, scissors beat paper")
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        return ("you lose, rock beats scissors")
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        return ("you lose, Paper beats Rock")
    } else {
        return ("enter valid combo");
    }
    // THIS MIGHT BE WORKING WELL ENOUGH NOWthis is somewhat working, but theres an issue with the final alert, even if Rock is entered correctly its not evaluating the expression as it should. need to put something in here after that iif "computer selection doesnt have these parameters it automatically wins" shit aint working brother, prolly need to rewrite this//
    }




 
//each time a round is played store, the result in a variable until a player has a score of 5//