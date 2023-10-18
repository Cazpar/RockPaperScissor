let rockPaperScissorArray = ["rock", "paper", "scissor"];

let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return rockPaperScissorArray[randomNumber];
}

//get users choice
let getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissor") {
        return userInput;
    } else {
        console.log("Error!");
    }
}

//determine winner
let determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "The game is a tie!";
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "The computer won!";
        } else {
            return "You won!";
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissor") {
            return "The computer won!";
        } else {
            return "You won!";
        }
    }
    if (userChoice === "scissor") {
        if (computerChoice === "rock") {
            return "The computer won!";
        } else {
            return "You won!";
        }
    }
}

let playRound = () => {
    let userChoice = getUserChoice(prompt("Enter rock, paper or scissor"));
    let computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

//play game x times
let playGame = () => {
    let numberOfGames = prompt("How many times do you want to play?");
    for (let i = 0; i < numberOfGames; i++) {
        playRound();
    }
}


playGame();
