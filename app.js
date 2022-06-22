// Creates a random play for the computer
function computerPlay() {
    let randNum = Math.floor(Math.random() * 9) + 1;
    let computerMove ="";

    if (randNum <= 3) {
        computerMove = "rock";
    }
    else if (randNum <= 6) {
        computerMove = "paper";
    }
    else { computerMove = "scissors"};

    return computerMove;
}
// simulates a round of the game using the user's selection the generated selection of the computer
function playRound(playerMove, computerPlay) {
    let computerMove = computerPlay();
    if (playerMove === "rock" && computerMove === "scissors") {
        console.log(`You Win! ${playerMove} beats ${computerMove}`);
        return true;
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        console.log(`You Win! ${playerMove} beats ${computerMove}`);
        return true;
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        console.log(`You Win! ${playerMove} beats ${computerMove}`);
        return true;
    }
    else if (playerMove === computerMove) {
        console.log("Draw!");
        return null;
    } else {
        console.log(`You Lose! ${computerMove} beats ${playerMove}`);
        return false;
    }
}

// Simulates a game of 5 rounds with the option to play again or quit
function game() {
    let userInput = prompt("Would you like to play? (YES or NO)");

    while (userInput.toUpperCase() !== "YES"){
        if (userInput.toUpperCase() === "NO") {
            return console.log("Game has ended");
        }
        userInput = prompt("Please enter YES if you would like to play or NO if you would like to quit.");
    }
    console.log("Game started");

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++ ) {
        let playerMove = prompt("Enter your move");
        let scoreCheck = playRound(playerMove, computerPlay);
        if (scoreCheck === true) {
            playerScore++;
        } 
        else if (scoreCheck === null) {
            playerScore++;
            computerScore++;
        } else {computerScore++; }
    }

    if (playerScore > computerScore) {
        console.log("You Win This Round!");
    } else {console.log("You Lose This Round"); }
}

game();