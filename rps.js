let humanScore = 0;
let computerScore = 0;
let totalRounds = 5;
let currRound = 1;


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
    currRound += 1;
    switch (humanChoice) {
        case "rock":
            if (computerChoice == humanChoice) {
                return "This round is a draw!";
            } else if (computerChoice == "scissors") {
                humanScore += 1;
                return "You win this round!";
            } else {
                computerScore += 1;
                return "You lose this round!";
            }
    
        case "paper":
            if (computerChoice == humanChoice) {
                return "This round is a draw!";
            } else if (computerChoice == "rock") {
                humanScore += 1;
                return "You win this round!";
            } else {
                computerScore += 1;
                return "You lose this round!";
            }

        case "scissors":
            if (computerChoice == humanChoice) {
                return "This round is a draw!";
            } else if (computerChoice == "scissors") {
                humanScore += 1;
                return "You win this round!";
            } else {
                computerScore += 1;
                return "You lose this round!";
            }

        default:
            return "Shouldn't get here!";
    }
}

const roundDisplay = document.querySelector("#round");
const humanScoreDisplay = document.querySelector("#score-human");
const compScoreDisplay = document.querySelector("#score-computer");
roundDisplay.textContent = currRound;
humanScoreDisplay.textContent = humanScore;
compScoreDisplay.textContent = computerScore;

const buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.textContent.toLowerCase();
        let computerChoice = getComputerChoice();
        const curResult = document.querySelector("#result");
        let resultStr = `You gave a ${humanChoice} and the computer gave a ${computerChoice}. ${playRound(humanChoice, computerChoice)}`;
        curResult.textContent = resultStr;
        humanScoreDisplay.textContent = humanScore;
        compScoreDisplay.textContent = computerScore;
        roundDisplay.textContent = currRound;

        if (currRound >= 20) {
            alert("Why are you still playing this?");
        }
    })
});

// playRound(getHumanChoice(), getComputerChoice());
// playRound(getHumanChoice(), getComputerChoice());
// playRound(getHumanChoice(), getComputerChoice());
// playRound(getHumanChoice(), getComputerChoice());
// playRound(getHumanChoice(), getComputerChoice());

// if (humanScore == computerScore) {
//     return `With a score of ${humanScore} - ${computerScore}, this game is a draw!`);
// } else if (humanScore > computerScore) {
//     return `With a score of ${humanScore} - ${computerScore}, you win!`);
// } else {
//     return `With a score of ${humanScore} - ${computerScore}, you lose!`);
// }