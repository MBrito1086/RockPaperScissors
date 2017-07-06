function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

let throws = ['rock', 'paper', 'scissors']

let computerNumber = getRandomIntInclusive(0,2)

let computer = throws[computerNumber]
let chose = prompt("Pick one! -Rock-Paper-Scissors-")

let me = chose

console.log('The computer chose', computer, 'and you chose', me)
//
// document.getElementById(computer)Math.random("rock","paper","scissors")
//
// document.getElementById(me)Math.random("rock","paper","scissors")

// let computer = "rock";
// let me = "scissors"; // Change this to test your code

if (me === "rock" && computer === "rock") {
  console.log("Looks like a tie!");
}

if (me === "paper" && computer === "rock") {
  console.log("I win!");
}

if (me === "scissors" && computer === "rock") {
  console.log("Computer wins!");
}

if (me === "rock" && computer === "paper") {
  console.log("Computer wins!");
}

if (me === "paper" && computer === "paper") {
  console.log("Looks like a tie!");
}

if (me === "scissors" && computer === "paper") {
  console.log("I win!");
}

if (me === "rock" && computer === "scissors") {
  console.log("I win!");
}

if (me === "paper" && computer === "scissors") {
  console.log("Computer wins!");
}

if (me === "scissors" && computer === "scissors") {
  console.log("Looks like a tie!");
}


//
// function me() {
//   return Math.random("rock","paper","scissors");
// }
//
// function computer() {
//   return Math.random("rock","paper","scissors");
// }
