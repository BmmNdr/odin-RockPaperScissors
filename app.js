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
const TRYAGAIN = document.getElementById('try-again')

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

    //get computer random choice
    Cchoice = getComputerChoice();

    //for debug
    //console.log('Computer: ' + Cchoice)
    //console.log('Player: ' + Pchoice)

    //if choices are equal --> tie
    if(Pchoice == Cchoice)
        return printResult("Tie")
    
    printResult(((Cchoice == "rock" && Pchoice == "paper") || (Cchoice == "paper" && Pchoice == "scissors") || (Cchoice == "scissors" && Pchoice == "rock")) ? "Won" : "Lost")
}

function printResult(result)
{
    //update the counter
    if(result == "Won")
    {
        //if round is won update the player counter and dispaly
        Pcount = Pcount + 1;
        PLAYER.innerHTML = "Player: " + Pcount;
    }
    else if(result == "Lost")
    {
        //if round is lost update the computer counter and dispaly
        Ccount = Ccount + 1;
        COMPUTER.innerHTML = "Computer: " + Ccount;
    }
        
    //shows the result of the match
    MATCH.innerHTML = result;

    //check if someone has won (counter is equal or above the max rounds)
    if (Pcount >= MAX_ROUNDS || Ccount >= MAX_ROUNDS)
    {
        //hides the buttons (rock, paper, scissors)
        CHOICES.style.visibility = 'hidden';
        MATCH.style.visibility = 'hidden';
        
        //make visible the try again button
        TRYAGAIN.style.visibility = 'visible';

        //if player count is equal or above the max rounds
        if(Pcount >= MAX_ROUNDS)
            //player has won
            WINNER.innerHTML = "You Won";
        else
            //else the computer won
            WINNER.innerHTML = "Computer Won";

        WINNER.style.color = 'Green';
        WINNER.style.fontSize = '50px';
    }
}


//try again button
TRYAGAIN.addEventListener("click", function() {reset()})

//reset to initial state
function reset()
{
    //put buttons (rock, paper, scissors) visible
    CHOICES.style.visibility = 'visible';
    MATCH.style.visibility = 'visible';

    //put try again button hidden
    TRYAGAIN.style.visibility = 'hidden';

    //set the initial text and font color and size to the text
    WINNER.innerHTML = 'Choose a Weapon!';
    WINNER.style.color = 'inherit';
    WINNER.style.fontSize = 'inherit';

    //reset the player and computer counter
    Pcount = 0;
    Ccount = 0;

    //reset the player and compute counter display
    PLAYER.innerHTML = "Player: " + Pcount;
    COMPUTER.innerHTML = "Computer: " + Ccount;

    //reset the initial match result display's message
    MATCH.innerHTML = "Here you will see the result for every match";
}