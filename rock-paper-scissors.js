let gameChoice = Math.random();
if (gameChoice >= (2/3)) {
  gameChoice = "rock";
} else if (gameChoice >= (1/3)) {
  gameChoice = "paper";
} else {
  gameChoice = "scissors";
}

const choiceCompare = function(userChoice, gameChoice) {
  if (userChoice === gameChoice) {
    return "It's a tie!";
    userChooses();
  } else if (userChoice === "rock") {
    if (gameChoice === "paper") {
      return "You lose to paper!";
    } else {
      return "You beat scissors!";
    }
  } else if (userChoice === "paper") {
    if (gameChoice === "rock") {
      return "You beat rock!";
    } else {
      return "You lose to scissors!";
    }
  } else {
    if (gameChoice === "paper") {
      return "You beat paper!";
    } else {
      return "You lose to rock!";
    }
  }
}

const userChooses = function() {
let userChoice = prompt("Do you choose rock, paper, or scissors?").toLowerCase();
console.log(`User: ${userChoice}`);
console.log(`Computer: ${compChoice}`)
if (userChoice != ("rock" || "paper" || "scissors")) {
  console.log("Invalid choice made.");
  userChooses();
 }
choiceCompare(userChoice, gameChoice);
}

userChooses();
