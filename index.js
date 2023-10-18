const choices = ["rock", "paper", "scissor"];

let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//determine winner
let determineWinner = (playerSelection, computerChoice) => {
    if (playerSelection === computerChoice) {
        return "The game is a tie!";
    }
    if (playerSelection === "rock") {
        if (computerChoice === "paper") {
            return "The computer won!";
        } else {
            return "You won!";
        }
    }
    if (playerSelection === "paper") {
        if (computerChoice === "scissor") {
            return "The computer won!";
        } else {
            return "You won!";
        }
    }
    if (playerSelection === "scissor") {
        if (computerChoice === "rock") {
            return "The computer won!";
        } else {
            return "You won!";
        }
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.dataset.choice.toLowerCase();
        console.log(playerSelection);
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        const result = determineWinner(playerSelection, computerSelection);
        console.log(result);

        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");

        if (result === "You won!") {
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
        } else if (result === "The computer won!") {
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
        }

        const resultDiv = document.querySelector(".result p");
        resultDiv.textContent = result;



    });
});
