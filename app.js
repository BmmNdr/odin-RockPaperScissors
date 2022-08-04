//Button for player choice
const ROCK = document.querySelector("#rock")
const PAPER = document.querySelector("#paper")
const SCISSORS = document.querySelector("#scissors")

//identify player choice
ROCK.addEventListener("click", function() {round("rock")})
PAPER.addEventListener("click", function() {round("paper")})
SCISSORS.addEventListener("click", function() {round("scissors")})


//return a random choice between Rock, Paper or Scissors
const CHOICES = ["rock", "paper", "scissors"]
function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)]
}

function round(Pchoice) {
    Cchoice = getComputerChoice();
    console.log('Computer: ' + Cchoice)
    console.log('Player: ' + Pchoice)

    if(Pchoice == Cchoice)
        return printResult("tie")
        
    printResult(((Cchoice == "rock" && Pchoice == "paper") || (Cchoice == "paper" && Pchoice == "scissors") || (Cchoice == "scissors" && Pchoice == "rock")) ? "Win" : "Lose")
}

function printResult(result)
{
    console.log(result)
}