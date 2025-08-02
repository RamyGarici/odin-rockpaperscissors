
let playImage = document.getElementById("player-img");
let computerImage = document.getElementById("computer-img");
let winMessage = document.getElementById("win-msg");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let playerPoints = 0;
let computerPoints = 0;


function getComputerChoice(choice){
      const choices=["rock","paper","scissors" ];
      const computerChoice= choices[Math.floor(Math.random()*3)];
      computerImage.src = `./assets/${computerChoice}.png`;
      getWinner(choice,computerChoice);

    }


    function getPlayerChoice(choice){
      
        playImage.src = `./assets/${choice}.png`;
        getComputerChoice(choice);
 
    }




    function getWinner(play,comp){
      if (playerPoints >= 5 ) {
               winMessage.innerText = "Player Won The Game!"
               disableButtons();
               return;
  }
    else if(computerPoints >= 5){
        winMessage.innerText = "Computer Won The Game!"
        disableButtons();
        return;
    }
      
      if (play== "rock" && comp=="scissors" ){ winMessage.innerText = "You Won!";
        playerPoints +=1;
        playerScore.textContent = playerPoints;


      }
      else if (play=="scissors" && comp=="rock"){winMessage.innerText = "You Lose";
        computerPoints +=1;
        computerScore.textContent = computerPoints;
      }
      
      else if(play=="rock" && comp=="paper"){ winMessage.innerText = "You Lose";
         computerPoints +=1;
         computerScore.textContent = computerPoints;
      }
      else if(play==comp){winMessage.innerText = "Draw";}
      else if (play=="paper" && comp=="scissors"){winMessage.innerText = "You Lose";
         computerPoints +=1;
         computerScore.textContent = computerPoints;
      }
      
      else if (play=="paper" && comp=="rock"){winMessage.innerText = "You Lose";
         computerPoints +=1;
         computerScore.textContent = computerPoints;
      }
      else if (play=="scissors" && comp=="paper"){winMessage.innerText = "You Won!";
         playerPoints +=1;
         playerScore.textContent = playerPoints;
      }
  
    }



   
 function disableButtons(){
    let buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
        button.disabled = true;
        button.style.opacity = 0.5;

    })
 }
  