const result = document.querySelector("#result-container");
const finalScoreContainer = document.querySelector("#final-score");
const finalResultContainer = document.querySelector("#final-result");
const finalScore = document.createElement ("p");
const finalResult = document.createElement ("p");

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", () => {
    window.location.href=window.location.href
})

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

const paperButton = document.querySelector("#paper");

paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})


let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

function showResetButton () {
    resetButton.style.display = "block";
}

function getComputerChoice () {
    let number = (Math.floor(Math.random() * 100) + 1);
    
    if (number >=0 && number < 33) {
        let CPUChoice = "paper";
        return CPUChoice;
        
    } else if (number >= 33 && number < 66){
        let CPUChoice = "rock";
        return CPUChoice;
        
    } else {
        let CPUChoice = "scissors";
        return CPUChoice;
    }
}

function getUserChoice() {
    let rawChoice = prompt("Type your choice: rock, paper or scissors");
    let userChoice = rawChoice.toLowerCase();

    if (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors') {
        alert("Please type a valid choice");
        getUserChoice();
    } else {
        return userChoice;
    }
}

function playRound (humanChoice, computerChoice) {

    if (roundNumber < 5) {
   
            const resultText = document.createElement("p");

                if (humanChoice === computerChoice) {
                    resultText.textContent = "Woooah!, it's a draw! Keep going!";
                    console.log("It worked!")
                    result.appendChild(resultText);
                    result.appendChild(document.createElement("br"));
                    roundNumber++
                } else if (humanChoice === "rock" && computerChoice === "scissors") {
                    resultText.textContent = "The user wins! Rock beats scissors!";
                    console.log("It worked!")
                    result.appendChild(resultText);
                    result.appendChild(document.createElement("br"));
                    roundNumber++
                    humanScore++;
                } else if (humanChoice === "paper" && computerChoice === "rock") {
                    resultText.textContent = "The user wins! Paper beats rock!";
                    console.log("It worked!")
                    result.appendChild(resultText);
                    result.appendChild(document.createElement("br"));
                    roundNumber++
                    humanScore++;
                } else if (humanChoice === "scissors" && computerChoice === "paper") {
                    resultText.textContent = "The user wins! Scissors beats paper!";
                    console.log("It worked!")
                    result.appendChild(resultText);
                    result.appendChild(document.createElement("br"));
                    roundNumber++
                    humanScore++;
                } else if (computerChoice === "rock" && humanChoice === "scissors") {
                    resultText.textContent = "The CPU wins! Rock beats scissors!";
                    console.log("It worked!")
                    result.appendChild(resultText);
                    result.appendChild(document.createElement("br"));
                    roundNumber++
                    computerScore++;
                } else if (computerChoice === "paper" && humanChoice === "rock") {
                    resultText.textContent = "The CPU wins! Paper beats rock!";
                    console.log("It worked!")
                    result.appendChild(resultText);
                    result.appendChild(document.createElement("br"));
                    roundNumber++
                    computerScore++;
                } else if (computerChoice === "scissors" && humanChoice === "paper") {
                    resultText.textContent = "The CPU wins! Scissors beats paper!";
                    console.log("It worked!")
                    result.appendChild(resultText);
                    result.appendChild(document.createElement("br"));
                    roundNumber++
                    computerScore++;
                } 
            } else {
                finalScore.textContent = `The final score is ${humanScore} x ${computerScore}`;
                finalScoreContainer.appendChild(finalScore)

                    if (humanScore === computerScore) {
                    finalResult.textContent = "It's a draw!";
                    finalResultContainer.appendChild(finalResult);
                    showResetButton();
                    } else if (humanScore > computerScore) {
                        finalResult.textContent = "You win!";
                        finalResultContainer.appendChild(finalResult);
                        showResetButton();
                    } else {
                        finalResult.textContent = "The CPU Wins!";
                        finalResultContainer.appendChild(finalResult);
                        showResetButton();
                    }
     }
}
