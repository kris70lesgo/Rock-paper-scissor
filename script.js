const choices = ["rock", "paper", "scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");

const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");
let playerscore = 0;
let computerscore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    
    if (playerChoice === computerChoice) {
        result = "It's a TIE";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You WIN" : "You LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You WIN" : "You LOSE";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You WIN" : "You LOSE";
                break;
        }
    }

    playerdisplay.textContent = `PLAYER: ${playerChoice}`;
    computerdisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultdisplay.textContent = result;

    resultdisplay.classList.remove("greenText", "redText");
    switch(result){
        case "You WIN":
            resultdisplay.classList.add("greenText");
            playerscore++;
            playerscoredisplay.textContent = playerscore;
            break;
        case "You LOSE":
            resultdisplay.classList.add("redText");
            computerscore++;
            computerscoredisplay.textContent = computerscore;
            break;
    }

}
function resetGame() {
    playerscore = 0;
    computerscore = 0;
    playerscoredisplay.textContent = playerscore;
    computerscoredisplay.textContent = computerscore;
    playerdisplay.textContent = "PLAYER:";
    computerdisplay.textContent = "COMPUTER:";
    resultdisplay.textContent = "";
    resultdisplay.classList.remove("greenText", "redText");
}
