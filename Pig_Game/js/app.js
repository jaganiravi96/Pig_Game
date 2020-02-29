/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

init();

//action for roll dice button
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(document.getElementById('name-'+activePlayer).textContent !== 'Winner'){
       //Get Random Number
        var dice = Math.floor(Math.random() * 6 + 1);
    
        //show dice with that number
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = '../resource/dice-'+dice+'.png';
    
        //Update player round score if the rolled number is not 1.
        if(dice != 1){
            roundScore += dice;
            document.getElementById('current-'+activePlayer).textContent = roundScore;
        }
        else{
            nextPlayer();
        } 
    }
    
    
});

//action for new game button
document.querySelector('.btn-new').addEventListener('click',init);

//action for hold score button
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(document.getElementById('name-'+activePlayer).textContent !== 'Winner'){
        scores[activePlayer] += roundScore;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];

        if(scores[activePlayer] >= 20){
            document.getElementById('name-'+activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
        }
        else{
            roundScore = 0;
            nextPlayer();
        }
    }
        
});

//function to get next player active
function nextPlayer(){
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    document.getElementById('current-'+activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
}

//function to reset the score and player
function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.style.display = 'none';    
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}



