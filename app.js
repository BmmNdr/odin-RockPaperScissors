const ROCK = document.querySelector("#rock")
const PAPER = document.querySelector("#paper")
const SCISSORS = document.querySelector("#scissors")

ROCK.addEventListener("click", function() {round("rock")})
PAPER.addEventListener("click", function() {round("paper")})
SCISSORS.addEventListener("click", function() {round("scissors")})

//return a random choice between Rock, Paper or Scissors
function getComputerChoice() {
    let n = Math.floor(Math.random() * 3)
    
    if (n == 0)
        return "Rock"
    else if (n == 1)
        return "Paper"
    else
        return "Scissors"
}

function round(choice) {
    console.log(choice)
}