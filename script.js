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
