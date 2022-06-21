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
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        console.log(`You Win! ${playerMove} beats ${computerMove}`);
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        console.log(`You Win! ${playerMove} beats ${computerMove}`);
    }
    else if (playerMove === computerMove) {
        console.log("Draw!");
    } else {console.log(`You Lose! ${computerMove} beats ${playerMove}`)}
}