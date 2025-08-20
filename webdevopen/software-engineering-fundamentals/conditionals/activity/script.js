let rock = 'rock';
let scissor = 'scissor';
let paper = 'paper'

// these two variables will be changed to test the conditional

let firstPlayerChoice = rock;
let secondPlayerChoice = rock;

let firstPossibility = (firstPlayerChoice === 'paper' && secondPlayerChoice === 'rock');
let secondPossibility = (firstPlayerChoice === 'scissor' && secondPlayerChoice === 'paper');
let thirdPossibility = (firstPlayerChoice === 'rock' && secondPlayerChoice === 'scissor');

let fourthPossibility = (firstPlayerChoice === 'paper' && secondPlayerChoice === 'scissor');
let fifthPossibility = (firstPlayerChoice === 'scissor' && secondPlayerChoice === 'rock');
let sixthPossibility = (firstPlayerChoice === 'rock' && secondPlayerChoice === 'paper');

let seventhPossibility = (firstPlayerChoice === secondPlayerChoice);

if ( firstPossibility || secondPossibility || thirdPossibility) {
    console.log("First player won!");
} else if (fourthPossibility || fifthPossibility || sixthPossibility){
    console.log("Second player won");
} else {
    console.log("It's a tie");
}

// Other solution

let choices = ["rock","paper","scissor"];

let winsAgainst = {
    rock: "scissor",
    paper: "rock",
    scissor: "paper"
};

let playerChoice = "rock";
// Math floor redondea hacia abajo
let machineChoice = choices[Math.floor(Math.random()* choices.length)];
console.log("Player chooses:", playerChoice);
console.log("Machine chooses:" , machineChoice);

// Logica

if (playerChoice === machineChoice){
    console.log("It's a tie");
} else if ( winsAgainst[playerChoice] === machineChoice){
        console.log("Player won!");
    } else{ 
        console.log("Machine won!!");
    }

