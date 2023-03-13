//when a round is started, have the computer return a random choice of either rock paper or scissors//


function getComputerChoice() {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    let choiceArray = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return choiceArray
}

//play a round** take player in put - rock papaer scissors, store user input. computer input will be the get computer choice function. return the winner//

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("make your selection");
    computerSelection = getComputerChoice()
    if (playerSelection == "rock", computerSelection == 'Rock', 'Paper', 'Scissors' ) {
        alert("you win!")
    } else { 
        alert('wrong')
    }
    
    
    
}


 
//each time a round is played store, the result in a variable until a player has a score of 5//