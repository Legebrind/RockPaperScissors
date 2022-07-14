function playRound(playerSelection,computerSelection){

    if (playerSelection === computerSelection){
        return "It's a draw!"
    }
    if(playerSelection === "rock"){
        switch(computerSelection){
            case "scissors":
                return "Player wins!";
            
            case "paper":
                return "Computer wins!";

            default:
                return "Something went wrong";
        }
    }
    if(playerSelection === "paper"){
        switch(computerSelection){
            case "rock":
                return "Player wins!";
            
            case "scissors":
                return "Computer wins!";

            default:
                return "Something went wrong";
        }
    }
    if(playerSelection === "scissors"){
        switch(computerSelection){
            case "paper":
                return "Player wins!";
            
            case "rock":
                return "Computer wins!";

            default:
                return "Something went wrong";
        }
    }
    return "Player input wrong";
}

function computerSelect(){
    var seleccion = Math.floor(Math.random()*3);
    switch(seleccion){
        case 0:
            return "paper";
        
        case 1:
            return "rock";

        case 2:
            return "scissors"
    }
}

function partida(){

    var playerScore = computerScore = 0;
    for(let i = 1; i <= 5; i++ ){
        var playerInput = prompt("rock/paper/scissors?");
        var res = playRound(playerInput,computerSelect());
        alert(res);
        if(res === "Player wins!"){
            playerScore++;
        }
        if(res === "Computer wins!"){
            computerScore++;
        }
    }
    alert("Jugador: "+playerScore+" Ordenador: "+computerScore);
}

partida();