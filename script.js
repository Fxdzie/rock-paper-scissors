const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultsText = document.querySelector(".results");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
        
    switch(humanChoice){
        case "rock":
            if(computerChoice === "scissors"){
                resultsText.innerText = "You win! Rock beats Scissors";
                humanScore++;
            }else if(computerChoice==="paper"){
                resultsText.innerText = "You lose! Paper beats Rock";
                computerScore++;
            }else{
                resultsText.innerText = "Interesting. Looks like its a tie.";
            }
            break;
        case "paper":
            if(computerChoice === "scissors"){
                resultsText.innerText = "You lose! Scissors beats Paper";
                computerScore++;
            }else if(computerChoice==="paper"){
                resultsText.innerText = "Interesting. Looks like its a tie.";
            }else{
                resultsText.innerText = "You win! Paper beats Rock";
                humanScore++;
            }
            break;
        case "scissors":
            if(computerChoice === "scissors"){
                resultsText.innerText = "Interesting. Looks like its a tie.";
            }else if(computerChoice==="paper"){
                resultsText.innerText = "You win! Scissors beats Paper";
                humanScore++;
            }else{
                resultsText.innerText = "You lose! Rock beats Scissors";
                computerScore++;
            }
            break;
    }
}

rockButton.addEventListener("click",()=>{playRound("rock",getComputerChoice())});
paperButton.addEventListener("click",()=>{playRound("paper",getComputerChoice())});
scissorsButton.addEventListener("click",()=>{playRound("scissors",getComputerChoice())});

function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    if(choice===0){
        return "rock";
    }else if(choice===1){
        return "paper";
    }else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("What will you choose. Rock, Paper or Scissors").toLowerCase();
        while(choice!=="rock" && choice!=="paper" && choice !== "scissors"){
            alert("Oops, we didn't catch that");
            choice = prompt("What will you choose. Rock, Paper or Scissors").toLowerCase();
        }
    return choice;
}

function playGame(){
    
    
    // if(humanScore<computerScore){
    //     alert("Sorry!! You have lost the game");
    // }else if(humanScore>computerScore){
    //     alert("Congratulations!! You have won the game");
    // }else{
    //     alert("Well...Looks like a tie");
    // }
}


