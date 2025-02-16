let humanScore = 0;
let computerScore = 0;
let totalRounds = 5;
let currRound = 1;

function getHumanChoice() {
    let choice;
    do {
        if (currRound == 1) {
            choice = prompt(`Let's play a game of rock, paper, or scissors. We will play a total of ${totalRounds} rounds! What is your choice? 
                (warning: an invalid response will result in a loop)`).toLowerCase();
        } else {
            choice = prompt(`What is your choice for round ${currRound}? (warning: an invalid response will result in a loop)`).toLowerCase();
        }
    } while (choice != "rock" && choice != "paper" && choice != "scissors") 
    return choice;
}

function getComputerChoice() {
    const val = Math.floor(Math.random() * 3);
    if (val == 0) {
        return "rock";
    } else if (val == 1) {
        return "paper";
    } else {
        return "scissors";
    }
    
}

function playRound(humanChoice, computerChoice) {
    console.log(`You gave a ${humanChoice} and the computer gave a ${computerChoice}.`)
    switch (humanChoice) {
        case "rock":
            if (computerChoice == humanChoice) {
                console.log("This round is a draw!");
            } else if (computerChoice == "scissors") {
                humanScore += 1;
                console.log("You win this round!");
            } else {
                computerScore += 1;
                console.log("You lose this round!");
            }
            break;
    
        case "paper":
            if (computerChoice == humanChoice) {
                console.log("This round is a draw!");
            } else if (computerChoice == "rock") {
                humanScore += 1;
                console.log("You win this round!");
            } else {
                computerScore += 1;
                console.log("You lose this round!");
            }
            break;

        case "scissors":
            if (computerChoice == humanChoice) {
                console.log("This round is a draw!");
            } else if (computerChoice == "scissors") {
                humanScore += 1;
                console.log("You win this round!");
            } else {
                computerScore += 1;
                console.log("You lose this round!");
            }
            break;

        default:
            console.log("Shouldn't get here!");
            break;
    }
    console.log(`The current score is ${humanScore} - ${computerScore} (human score - computer score).`)
    currRound += 1;
}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

if (humanScore == computerScore) {
    console.log(`With a score of ${humanScore} - ${computerScore}, this game is a draw!`);
} else if (humanScore > computerScore) {
    console.log(`With a score of ${humanScore} - ${computerScore}, you win!`);
} else {
    console.log(`With a score of ${humanScore} - ${computerScore}, you lose!`);
}