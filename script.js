const result = document.querySelector("#result-container");

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
    
    const resultText = document.createElement("p");

        if (humanChoice === computerChoice) {
            resultText.textContent = "It's a draw!";
            result.appendChild(resultText);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            resultText.textContent = "The user wins! Rock beats scissors!";
            result.appendChild(resultText);
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            resultText.textContent = "The user wins! Paper beats rock!";
            result.appendChild(resultText);
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            resultText.textContent = "The user wins! Scissors beats paper!";
            result.appendChild(resultText);
            humanScore++;
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            resultText.textContent = "The CPU wins! Rock beats scissors!";
            result.appendChild(resultText);
            computerScore++;
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            resultText.textContent = "The CPU wins! Paper beats rock!";
            result.appendChild(resultText);
            computerScore++;
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            resultText.textContent = "The CPU wins! Scissors beats paper!";
            result.appendChild(resultText);
            computerScore++;
        } 
}