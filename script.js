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
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice,computerChoice){
        
        switch(humanChoice){
            case "rock":
                if(computerChoice === "scissors"){
                    console.log("You win! Rock beats Scissors");
                    humanScore++;
                }else if(computerChoice==="paper"){
                    console.log("You lose! Paper beats Rock");
                    computerScore++;
                }else{
                    console.log("Interesting. Looks like its a tie.");
                }
                break;
            case "paper":
                if(computerChoice === "scissors"){
                    console.log("You lose! Scissors beats Paper");
                    computerScore++;
                }else if(computerChoice==="paper"){
                    console.log("Interesting. Looks like its a tie.");
                }else{
                    console.log("You win! Paper beats Rock");
                    humanScore++;
                }
                break;
            case "scissors":
                if(computerChoice === "scissors"){
                    console.log("Interesting. Looks like its a tie.");
                }else if(computerChoice==="paper"){
                    console.log("You win! Scissors beats Paper");
                    humanScore++;
                }else{
                    console.log("You lose! Rock beats Scissors");
                    computerScore++;
                }
                break;
        }
    }
    for(let i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    if(humanScore<computerScore){
        alert("Sorry!! You have lost the game");
    }else if(humanScore>computerScore){
        alert("Congratulations!! You have won the game");
    }else{
        alert("Well...Looks like a tie");
    }
}

playGame();