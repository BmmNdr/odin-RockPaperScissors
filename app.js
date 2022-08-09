//Button for player choice
const ROCK = document.querySelector("#rock")
const PAPER = document.querySelector("#paper")
const SCISSORS = document.querySelector("#scissors")
const MATCH = document.getElementById('match')
const WINNER = document.getElementById('winner')
const PLAYER = document.getElementById('player')
const COMPUTER = document.getElementById('computer')
const CHOICES = document.getElementById('choices')
const HTML = document.querySelector('html')

const MAX_ROUNDS = 5;

let Pcount = 0;
let Ccount = 0;

//identify player choice
ROCK.addEventListener("click", function() {round("rock")})
PAPER.addEventListener("click", function() {round("paper")})
SCISSORS.addEventListener("click", function() {round("scissors")})


//return a random choice between Rock, Paper or Scissors
const WEAPONS = ["rock", "paper", "scissors"]
function getComputerChoice() {
    return WEAPONS[Math.floor(Math.random() * 3)]
}

function round(Pchoice) {
    Cchoice = getComputerChoice();
    console.log('Computer: ' + Cchoice)
    console.log('Player: ' + Pchoice)

    if(Pchoice == Cchoice)
        return printResult("Tie")
        
    printResult(((Cchoice == "rock" && Pchoice == "paper") || (Cchoice == "paper" && Pchoice == "scissors") || (Cchoice == "scissors" && Pchoice == "rock")) ? "Won" : "Lost")
}

function printResult(result)
{
    if(result == "Won")
    {
        Pcount = Pcount + 1;
        PLAYER.innerHTML = "Player: " + Pcount;
    }
    else if(result == "Lost")
    {
        Ccount = Ccount + 1;
        COMPUTER.innerHTML = "Computer: " + Ccount;
    }
        
    MATCH.innerHTML = result;

    if (Pcount >= MAX_ROUNDS || Ccount >= MAX_ROUNDS)
    {
        CHOICES.style.visibility = 'hidden';
        MATCH.style.visibility = 'hidden';
        HTML.style.alignItems = 'center';
        HTML.style.justifyItems = 'center';

        if(Pcount >= MAX_ROUNDS)
            WINNER.innerHTML = "You Won";
        else
            WINNER.innerHTML = "Computer Won";

        WINNER.style.color = 'Green';
        WINNER.style.fontSize = '50px';
    }
}