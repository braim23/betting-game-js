'use strict';

// console.log(document.querySelector('.message').textContent);

let randomNumber = Math.floor(Math.random()*20) + 1;
console.log(randomNumber);
var score = 7;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

   if(score > 1){
    if(!guess){
        // document.querySelector('.message').textContent = "⛔ No number!";
        displayMessage("⛔ No number!");
    } else if(guess === randomNumber){
        document.querySelector('.message').textContent = "🎉 Corrrect Number!";
        document.querySelector('.number').textContent = randomNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(highScore < score){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // console.log(); 

    }else if(guess !== randomNumber){
        document.querySelector('.message').textContent = guess > randomNumber ? "📈 Too high!" : "📉 Too low!";
        score--;
        document.querySelector('.score').textContent = score;
    }
    
    
   }
   else{
    score = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('.check').ariaDisabled;
    document.querySelector('.check').textContent = "GAME OVER";
    document.querySelector('.check').style.backgroundColor = 'red';
    document.querySelector('.message').textContent = "YOU LOST! ";
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.guess').value = ":(";
    document.querySelector('header').style.color = 'red';
    document.querySelector('.number').style.backgroundColor = 'red';
   }
    
});

document.querySelector('.again').addEventListener('click', function (){

    score = 7;
    randomNumber = Math.floor(Math.random()*20) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.check').style.backgroundColor = '#eee';
    document.querySelector('header').style.color = '#eee';
    document.querySelector('.number').style.backgroundColor = '#eee';

});



