
let playImage = document.getElementById("player-img")
let computerImage = document.getElementById("computer-img")
let winMessage = document.getElementById("win-msg")


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
      if (play== "rock" && comp=="scissors" ){ winMessage.innerText = "You Won!";

      }
      else if (play=="scissors" && comp=="rock"){winMessage.innerText = "You Lose";}
      else if(play=="rock" && comp=="paper"){ winMessage.innerText = "You Lose";}
      else if(play==comp){winMessage.innerText = "Draw";}
      else if (play=="paper" && comp=="scissors"){winMessage.innerText = "You Lose";}
      else if (play=="paper" && comp=="rock"){winMessage.innerText = "You Lose";}
      else if (play=="scissors" && comp=="paper"){winMessage.innerText = "You Won!";}
    }



   
 
