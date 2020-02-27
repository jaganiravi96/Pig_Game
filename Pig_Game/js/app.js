/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, hold;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
hold = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
    
    //Get Random Number
    var dice = Math.floor(Math.random() * 6 + 1);
    
    //show dice with that number
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = '../resource/dice-'+dice+'.png';
    
    //Update player round score if the rolled number is not 1.
   if(dice != 1){
        roundScore = roundScore + dice;
        parseInt(document.getElementById('current-'+activePlayer).textContent) = roundScore;
        console.log(document.getElementById('score-'+activePlayer).value);
    }
    else{
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
    }
    
   /* var temp = 0;
    if(activePlayer == 0){
         temp = document.getElementById('score-0').;
         temp = temp + roundScore; 
         document.getElementById('score-0').textContent = temp;
        //activePlayer = 1;    
    }
    else{
        document.getElementById('score-1').textContent += roundScore;
        //activePlayer = 0;
    }*/
    
});







