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


function game2() {
    
}


function game() {
    
    for (;;) {  //made infinite, dont forget to look bac at this
    computerSelection = getComputerChoice();     
    playerSelection = prompt("make your selection").toLowerCase(); 

    console.log(playRound(computerSelection, playerSelection));
    }


    
   //if (userScore === pcScore) {     eliminating the logic used to play exactly 5 rounds
   // alert("STALEMATE");
  // } else if ( userScore > pcScore) {
   // alert("you win!!!!");
  // } else {
   // alert("you lose");
  // }
   
    //playAgain();
    
}

    
/* fix the strings to make more sense and wordy*/

/*at the end of 5 rounds console.log the winner*/


const btnContainer = document.getElementById("btn-container").style.justifyContent = "center"

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", function (event) {       //we are listening for any of these buttons to be pressed. depending on the button pressed let player selection = button clicked
        const playerSelection = event.target.innerText
        console.log(playerSelection)                         // it works, but idk if its best practice. we re selecting all buttons, converting the, into an array
        playRound((playerSelection))                         // were listening for them to be clicked, once clicked we run the event function which turns
    // the reuslt to lower case. the were calling playround with player selection as a paramater
        
        
    })
})



function playRound(playerSelection, computerSelection) {
     
    computerSelection = getComputerChoice();
    
    
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
    
        
/////////////////////////////////////DOM/////////////////////////         clicking a button needs to start a round that stores the selected button





 function playerSelect() {

 }

        
    
        
    
            


       




 
