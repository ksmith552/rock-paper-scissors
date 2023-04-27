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
        
        displayScore.innerText = ""
   
        
        displayScore.innerText = ""
        displayResult.innerText = ""
 
    
}


 //current issues: reulst and running score texts is not clearining once winning score is reached
 //game isnt immedialey ending on the winning point
 //score is setting back to zero but displaying a random choice?



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
    button.addEventListener("click", function (event) {
               //we are listening for any of these buttons to be pressed. depending on the button pressed let player selection = button clicked
        const playerSelection = event.target.innerText
        console.log(playerSelection) 
                             // it works, but idk if its best practice. we re selecting all buttons, converting the, into an array
        playRound((playerSelection))  
        if (userScore === 5) {
            winResults.innerText = ""
            setTimeout(function () { confirm("You won! Do you want to play Again") == true; playAgain() }, 1);
            
        } else if (pcScore === 5) {
            winResults.innerText = ""
            setTimeout(function () { confirm("Oh dear, You Lost! Do you want to play Again") == true; playAgain() }, 1);
        }                        
        
        
    })
})


function test() {
    if (userScore === 5) {
        
        alert('Wou win')
    } else if (pcScore === 5) {
        alert("you lose")
    }

}
function playRound(playerSelection, computerSelection) {
     
    computerSelection = getComputerChoice();
    
    //if (userScore === 5) {
        //alert('Wou win')
        //displayScore.innerText = ""
       // playAgain()
        
    //} else if (pcScore === 5) {
       // alert("you lose")
   // playAgain()
   // }
    
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
    
        
/////////////////////////////////////DOM/////////////////////////         clicking a button needs to start a round that stores the selected button


//READ THISSSSSSS!!!!!!!!!!!!!!!!!!!!!!
//ADD A DIV TO DISPLAY THE RESULTS IN TEXT UNDERNEATH THE BUTTONS USOING ONLY THE DOM IE CREATE ELEMENT, ADD ELEMENT, APPEND CHILD ETC
//DISPLAY THE RESULTS IN THIS DIV
const results = document.querySelector("#results-ctn")
results.style.textAlign = "center";
results.style.paddingBottom = "10px"

const displayResult = document.createElement('div');
displayResult.classList.add('round-results');
results.appendChild(displayResult)
displayResult.style.padding = "10px"


const displayScore = document.createElement('div');
displayResult.classList.add('running-score');
results.appendChild(displayScore)
displayScore.style.padding = "10px"

const winResults = document.createElement('div');
winResults.classList.add('win-results');
results.appendChild(winResults)
displayScore.style.padding = "10px"





    
        
    
            


       




 
