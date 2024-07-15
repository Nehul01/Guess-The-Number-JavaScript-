'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let guesses = [];
let score = 10;
let highScore = 0;
let dupe = false;
let won = false;
let lost = false
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function() {
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  score = 10;
  won = false
  lost = false
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '10';
  guesses = [];
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  guesses.push(guess);
  if (!won && !lost){
    if (!guess) {
      displayMessage('🚫 No Number!');
    } else if (guess === secretNumber) {
      won = true
      displayMessage('🎉 Correct Number');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
  
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = score;
      }
    } else if (guess !== secretNumber) {
      if (score > 0) {
        dupe = false;
        for (let i = 0; i < guesses.length; i++) {
          if (guess === guesses[i - 1]) {
            if (!dupe) score += 1;
  
            dupe = true;
          }
        }
      displayMessage(`${guess > secretNumber ? '📈Too High!' : '📉 Too Low!'}`);
      score -= 1;
      document.querySelector('.score').textContent = score;} 
      else {
        displayMessage('💥 You lost the game');
        document.querySelector('body').style.backgroundColor = '#f04747';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
      }

      
    } 
  }
});
