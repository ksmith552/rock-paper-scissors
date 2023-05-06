let userScore = parseInt(0);
let pcScore = parseInt(0);

function getComputerChoice() {
    const computerChoices = ['rock', 'paper', 'scissors'];
    let choiceArray = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return choiceArray;
}

function playAgain() {
        userScore = parseInt(0);
        pcScore = parseInt(0);
        displayScore.innerText = ""
        displayResult.innerText = ""
 }

   
function playRound(playerSelection, computerSelection) {
     computerSelection = getComputerChoice();
   
    if (playerSelection === computerSelection) {
        displayResult.innerText = "Draw!";
        displayScore.innerText = `you have ${userScore} points, the computer has ${pcScore}`
        console.log(`you have ${userScore} points, the computer has ${pcScore}`);
        return ("draw");
        
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        userScore++;
        displayResult.innerText = "You Win, Rock beats Scissors!";
        displayScore.innerText = `you have ${userScore} points, the computer has ${pcScore}`
        console.log(`you have ${userScore} points, the computer has ${pcScore}`);
        return ("you win, Rock beats Scissors!");

     } else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore++;
        displayResult.innerText = "You Win, Paper beats Rock!";
        displayScore.innerText = `you have ${userScore} points, the computer has ${pcScore}`
        console.log(`you have ${userScore} points, the computer has ${pcScore}`);
        return ("you win, Paper beats Rock");

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore++;
        displayResult.innerText = "You Win, Scissors beats Paper!";
        displayScore.innerText = `you have ${userScore} points, the computer has ${pcScore}`
        console.log(`you have ${userScore} points, the computer has ${pcScore}`);
        return ("you win, Scissors beats Paper!");

    } else  {
        pcScore++;
        displayResult.innerText = "You Lost this round!!" 
        displayScore.innerText = `you have ${userScore} points, the computer has ${pcScore}`
        console.log(`you have ${userScore} points, the computer has ${pcScore}`);
        return ("you lose");
        
         
        }
    }
    
        







    
        
    
            


       




 
