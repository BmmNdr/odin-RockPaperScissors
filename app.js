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

console.log(getComputerChoice())