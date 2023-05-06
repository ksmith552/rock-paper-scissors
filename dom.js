const btnContainer = document.getElementById("btn-container").style.justifyContent = "center"
const buttons = document.querySelectorAll("button")

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
