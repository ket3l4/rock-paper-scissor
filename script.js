function toGame(){
    window.location='game.html';
}

function toStart(){
    window.location='index.html';
}

function botMove() {
    let num = Math.random() * 10;
    if(num <= 3){
        return "rock";
    }
    else if(num < 6){
        return "paper";
    }
    else{
        return "scissors";
    }

}

let playerScore = 0;
let botScore = 0;

function play(move) {
    const player = move;
    const bot = botMove()
    if (player === "rock") {
        console.log("Player: rock");
        if (bot === "paper") {
            botPic.src = "img/paper.png";
            botScore += 1;
            console.log("Bot: paper");
        } else if (bot === "scissors") {
            botPic.src = "img/scissors.png";
            playerScore += 1;
            console.log("Bot: scissors")
        } else if (bot === "rock") {
            botPic.src = "img/rock.png";
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
            botPic.src = "img/scissors.png";
            console.log("Bot: scissors")
            botScore += 1;
        } else if (bot === "rock") {
            botPic.src = "img/rock.png";
            console.log("Bot: rock")
            playerScore += 1;
        } else if (bot === "paper") {
            botPic.src = "img/paper.png";
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
            botPic.src = "img/rock.png";
            console.log("Bot: rock")
            botScore += 1;
        } else if (bot === "paper") {
            botPic.src = "img/paper.png";
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
    scoreboard.textContent = `${playerScore} | ${botScore}`;

}

const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const playerPic = document.querySelector(".player");
const botPic = document.querySelector(".bot");
const scoreboard = document.querySelector("#scoreboard");
const restart = document.querySelector(".restart");


rock.addEventListener("click", () => {
    play("rock");
    playerPic.src = "img/rock.png";
})

paper.addEventListener("click", () => {
    play("paper");
    playerPic.src = "img/paper.png";
})

scissors.addEventListener("click", () => {
    play("scissors");
    playerPic.src = "img/scissors.png";

})

restart.addEventListener("click",()=> {
    scoreboard.textContent = `0 | 0`;
    playerPic.src = "img/love.png";
    botPic.src = "img/love.png";
    playerScore = 0;
    botScore = 0;
})