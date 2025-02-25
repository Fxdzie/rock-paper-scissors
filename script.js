const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultsText = document.querySelector(".results");
const userScoreText = document.querySelector(".user");
const computerScoreText = document.querySelector(".computer");

let humanScore = 0;
let computerScore = 0;

function refresh(){
    humanScore = 0;
    computerScore = 0;
    resultsText.innerText = '';
    userScoreText.innerText = "User: 0";
    computerScoreText.innerText = "Computer: 0";
}

function checkWinner(){
    if(computerScore === 5 && humanScore < 5){
        resultsText.innerText = "YOU HAVE LOST...";
        setTimeout(refresh,5000);
        return;
    }
    if(humanScore ===5 && computerScore <5){
        resultsText.innerText = "YOU HAVE WON...";
        setTimeout(refresh,5000);
        return;
    }
}

function playRound(humanChoice,computerChoice){
        
    switch(humanChoice){
        case "rock":
            if(computerChoice === "scissors"){
                resultsText.innerText = "You win! Rock beats Scissors";
                humanScore++;
                userScoreText.innerText = `User: ${humanScore}`;
            }else if(computerChoice==="paper"){
                resultsText.innerText = "You lose! Paper beats Rock";
                computerScore++;
                computerScoreText.innerText = `Computer: ${computerScore}`;
            }else{
                resultsText.innerText = "Interesting. Looks like its a tie.";
            }
            break;
        case "paper":
            if(computerChoice === "scissors"){
                resultsText.innerText = "You lose! Scissors beats Paper";
                computerScore++;
                computerScoreText.innerText = `Computer: ${computerScore}`;
            }else if(computerChoice==="paper"){
                resultsText.innerText = "Interesting. Looks like its a tie.";
            }else{
                resultsText.innerText = "You win! Paper beats Rock";
                humanScore++;
                userScoreText.innerText = `User: ${humanScore}`;
            }
            break;
        case "scissors":
            if(computerChoice === "scissors"){
                resultsText.innerText = "Interesting. Looks like its a tie.";
            }else if(computerChoice==="paper"){
                resultsText.innerText = "You win! Scissors beats Paper";
                humanScore++;
                userScoreText.innerText = `User: ${humanScore}`;
            }else{
                resultsText.innerText = "You lose! Rock beats Scissors";
                computerScore++;
                computerScoreText.innerText = `Computer: ${computerScore}`;
            }
            break;
    }
    checkWinner();
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



