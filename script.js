let userScore = parseInt(0);
let pcScore = parseInt(0);


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


function playRound(computerSelection, playerSelection) {
        
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