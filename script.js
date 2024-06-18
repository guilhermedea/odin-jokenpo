
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
    
        if (humanChoice === computerChoice) {
            alert("It's a draw!");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            alert("The user wins! Rock beats scissors!");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            alert("The user wins! Paper beats rock!");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            alert("The user wins! Scissors beats paper!");
            humanScore++;
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            alert("The CPU wins! Rock beats scissors!");
            computerScore++;
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            alert("The CPU wins! Paper beats rock!");
            computerScore++;
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            alert("The CPU wins! Scissors beats paper!");
            computerScore++;
        } 
}