//when a round is started, have the computer return a random choice of either rock paper or scissors//


function getComputerChoice() {
    const computerChoices = ['rock', 'paper', 'scissors'];
    let choiceArray = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return choiceArray;
}



function playAgain() {
    if (confirm("do you want to play again")) {
        userScore = parseInt(0);
        pcScore = parseInt(0);
        game();
    } else {
        alert("weenie hut jr");
    }
    
}


let userScore = parseInt(0);
let pcScore = parseInt(0);

//play a round** take player in put - rock papaer scissors, store user input. computer input will be the get computer choice function. return the winner//

//calling the game function will start a new round and start the game over
function game() {
    
    for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("make your selection").toLowerCase();
    console.log(playRound(computerSelection, playerSelection));
    }

   if (userScore === pcScore) {
    alert("STALEMATE");
   } else if ( userScore > pcScore) {
    alert("you win!!!!");
   } else {
    alert("you lose");
   }
   
    playAgain();
    
}

    
/* fix the strings to make more sense and wordy*/

/*at the end of 5 rounds console.log the winner*/




/*function playRound(computerSelection, playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("make your selection");
    let userScore = 0;
    let pcScore = 0;*/
    
    
    /*if (playerSelection === computerSelection) {
        return ("draw")
    } else if (playerSelection === 'Rock' && computerSelection === "Scissors"){ 
        userScore++
        return score + ("you win, Rock beats Scissors!");
        console.log(`your current score is' ${userScore} 'and the computer score is' ${pcScore}`)
    } else if (playerSelection === 'Paper' && computerSelection === "Rock"){ 
        userScore++
        return ("you win, Paper beats Rock!");
    } else if (playerSelection === 'Scissors' && computerSelection === "Paper"){ 
        userScore++
        return ("you win, Scissors beats Paper!");    
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return ("you lose, scissors beat paper")
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        return ("you lose, rock beats scissors")
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        return ("you lose, Paper beats Rock")
    } else {
        return ("enter valid combo");
    }*/
    
    // THIS MIGHT BE WORKING WELL ENhOUGH NOWthis is somewhat working, but theres an issue with the final alert, even if Rock is entered correctly its not evaluating the expression as it should. need to put something in here after that iif "computer selection doesnt have these parameters it automatically wins" shit aint working brother, prolly need to rewrite this//
    

    function playRound(computerSelection, playerSelection) {
        
    /* need to add the method that makes player selection case insensitive?*/

        if (playerSelection === computerSelection) {
            console.log(`you have ${userScore} points, the computer has ${pcScore}`);
            return ("draw");
        } if (playerSelection === "rock" && computerSelection === "scissors") {
            userScore++;
            console.log(`you have ${userScore} points, the computer has ${pcScore}`);
            return ("you win, Rock beats Scissors!");
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            userScore++;
            console.log(`you have ${userScore} points, the computer has ${pcScore}`);
            return ("you win, Paper beats Rock");
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            userScore++;
            console.log(`you have ${userScore} points, the computer has ${pcScore}`);
            return ("you win, Scissors beats Paper!");
        } else  {
            pcScore++;
            console.log(`you have ${userScore} points, the computer has ${pcScore}`);
            return ("you lose");
        }
           
        
        }
    
        

        

        
    
        
    
            


       




 
//each time a round is played store, the result in a variable until a player has a score of 5//