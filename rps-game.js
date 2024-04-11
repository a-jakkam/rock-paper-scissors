

    let computerSelection;
    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let round= 1;

    function keepScore() {

        function playRound() {
            
            console.log("Round " + round++ + "/5");

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
            console.log("Computer chose: " + computerSelection);


            if (computerSelection === playerSelection) {
            // DRAW
                console.log("Draw! You both chose " + computerSelection + "!");
                
            
            // PLAYER WINS
            } else if (computerSelection === "rock" && playerSelection === "paper") {
                console.log("You win! Paper beats Rock");
                return playerScore++;
                
                

            } else if (computerSelection === "paper" && playerSelection === "scissors") {
                console.log("You win! Scissors beats Paper");
                return playerScore++;
                              
            

                
            } else if (computerSelection === "scissors" && playerSelection === "rock") {
                console.log("You win! Rock beats Scissors");
                return playerScore++;

                

            // PLAYER LOSES
            } else if (computerSelection === "rock" && playerSelection === "scissors") {
                console.log("You lose! Rock beats Scissors");
                return computerScore++;

            
            
            } else if (computerSelection === "paper" && playerSelection === "rock") {
                console.log("You lose! Paper beats Rock");
                return computerScore++;
                

            } else if (computerSelection === "scissors" && playerSelection === "paper") {
                console.log("You lose! Scissors beats Paper");
                return computerScore++;

            

            // WRONG ANSWERS   
            } else {
                console.log("Hmm, interesting...");
            }

           
            
    
        }
        
        

        playRound(); //ROUND 1
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        console.log(" ");

        playRound(); //ROUND 2
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        console.log(" ");

        playRound(); //ROUND 3
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        console.log(" ");

        playRound(); //ROUND 4
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        console.log(" ");

        playRound();//ROUND 5
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        console.log(" ");

        if (playerScore >> computerScore) {
            console.log("CONGRATULATIONS!! YOU HAVE WON BEST OF 5 ROUNDS OF ROCK, PAPER, SCISSORS!");

        } else if (computerScore>> playerScore) {
            console.log("YOU LOST BEST OF 5 ROUNDS OF ROCK, PAPER, SCISSORS! TRY AGAIN")
        
        } else {
            console.log("DRAW!!! TRY AGAIN TO SETTLE THE SCORE ONCE AND FOR ALL!!")
        }
    


        
        
    
    }

    keepScore();



