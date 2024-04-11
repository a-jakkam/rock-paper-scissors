

    let computerSelection;
    let playerSelection;

    function playRound(computer,player) {
        

        playerSelection = (prompt("Choose Rock, Paper or Scissors")).toLowerCase(); //gets player's choice + changes it to lowercase to match computer's answer
        console.log("Player chose: " + playerSelection);

        function getComputerChoice() { //computer randomly chooses rock, paper or scissors
        let random= Math.floor(Math.random()*3);
        
            if (random === 0) {
                return "rock";
        
            } else if (random === 1) {
                return "paper";
            
            } else {
                return "scissors";
            
            }
        }

        computerSelection = getComputerChoice();
        console.log("Computer chose: "+ computerSelection);


        if (computer === player) {
        // DRAW
            alert("Draw! You both chose " + computer + "!");
            
        
        // PLAYER WINS
        } else if (computer === "rock" && player === "paper") {
            alert("You win! Paper beats Rock");
            
            

        } else if (computer === "paper" && player === "scissors") {
            alert("You win! Scissors beats Paper");
            
           

            
        } else if (computer === "scissors" && player === "rock") {
            alert("You win! Rock beats Scissors");
            

        // PLAYER LOSES
        } else if (computer === "rock" && player === "scissors") {
            alert("You lose! Rock beats Scissors");
           
          
        } else if (computer === "paper" && player === "rock") {
            alert("You lose! Paper beats Rock");
           

        } else if (computer === "scissors" && player === "paper") {
            alert("You lose! Scissors beats Paper");
           

        // WRONG ANSWERS   
        } else {
            alert("Hmm, interesting...");
        }
 
    }
    
    

    playRound(computerSelection, playerSelection);
    playRound(computerSelection, playerSelection);
    playRound(computerSelection, playerSelection);
    playRound(computerSelection, playerSelection);
    playRound(computerSelection, playerSelection);
   



