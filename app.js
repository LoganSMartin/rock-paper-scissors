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