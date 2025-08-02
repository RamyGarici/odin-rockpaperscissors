function getComputerChoice(){
      const choices=["Rock","Paper","Scissors" ];
      const computerChoice= choices[Math.floor(Math.random()*3)];


      return computerChoice;
    }

    function getPlayerChoice(){
    //  const choice= prompt("Choose(Rock, Paper, Scissors)");
     return choice;
    }
    function getWinner(play,comp){
      if (play== "Rock" && comp=="Scissors" ){ return "You";

      }
      else if (play=="Scissors" && comp=="Rock"){return "Computer";}
      else if(play=="Rock" && comp=="Paper"){return "Computer;"}
      else if(play==comp){return "Nobody, it's a draw";}
      else if (play=="Paper" && comp=="Scissors"){return "Computer";}
      else if (play=="Paper" && comp=="Rock"){return "Computer";}
      else if (play=="Scissors" && comp=="Paper"){return "You";}
     
      
      
    }



   
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice()
     console.log("Computer chose "+ computerChoice);
     console.log("Player chose "+ playerChoice);
     winner= getWinner(playerChoice, computerChoice)
     console.log("The winner is " + winner)