
function playerMove(){
    let move = prompt("rock, paper or scissors ?");
    move = move.toLowerCase();
    return move;
}
function botMove() {
    let num = Math.random() * 10;
    if(num < 3){
        return "rock";
    }
    else if(num <= 6){
        return "paper";
    }
    else{
        return "scissors";
    }

}

let playerScore = 0;
let botScore = 0;

function play() {
    const player = playerMove();
    const bot = botMove()
    if (player === "rock") {
        console.log("Player: rock");
        if (bot === "paper") {
            botScore += 1;
            console.log("Bot: paper");
        } else if (bot === "scissors") {
            playerScore += 1;
            console.log("Bot: scissors")
        } else if (bot === "rock") {
            console.log("Bot: rock")
        }
        if (playerScore > botScore) {
            console.log("You win yay");
        } else if (playerScore < botScore) {
            console.log("You tried, that's ok!!");
        } else {
            console.log("Draw <;");

        }

    } else if (player === "paper") {
        console.log("Player: paper")
        if (bot === "scissors") {
            console.log("Bot: scissors")
            botScore += 1;
        } else if (bot === "rock") {
            console.log("Bot: rock")
            playerScore += 1;
        } else if (bot === "paper") {
            console.log("Bot: paper")
        }
        if (playerScore > botScore) {
            console.log("You win yay");
        } else if (playerScore < botScore) {
            console.log("You tried, that's ok!!");
        } else {
            console.log("Draw <;");

        }
    } else if (player === "scissors") {
        console.log("Player: scissors")
        if (bot === "rock") {
            console.log("Bot: rock")
            botScore += 1;
        } else if (bot === "paper") {
            console.log("Bot: paper")
            playerScore += 1;
        } else if (bot === "scissors") {
            console.log("Bot: scissors")
        }
        if (playerScore > botScore) {
            console.log("You win yay");
        } else if (playerScore < botScore) {
            console.log("You tried, that's ok!!");
        } else {
            console.log("Draw <;");

        }
    } else {
        console.log("Did you spell it right?")
    }
    console.log(`Player : ${playerScore}  Bot : ${botScore}`);

}

function playGame() {
    for (var i = 0; i < 5; i++) {
        play()
    }
    if (playerScore > botScore) {
        console.log("Player wins!!");
    } else if (playerScore < botScore) {
        console.log("Bot wins!!");
    } else {
        console.log("Stalemate <;");
    }
}