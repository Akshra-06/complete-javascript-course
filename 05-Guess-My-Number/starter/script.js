'use strict';

//DOM: Document Object Model
//DOM is used to manipulate HTML elements in JavaScript
let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number!';
    return;
  } else if (guess !== number && guess >= 0 && guess < 21) {
    document.querySelector('.message').textContent =
      guess < number ? 'Too Low!' : 'Too High!';
    document.querySelector('.score').textContent =
      document.querySelector('.score').textContent - 1;
    document.querySelector('body').style.backgroundColor = '#d59191';
    document.querySelector('.message').style.color = 'Red';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'You guessed it right! 🎉';
    document.querySelector('.number').textContent = number;
    document.querySelector('.highscore').textContent = Math.max(
      Number(document.querySelector('.highscore').textContent),
      Number(document.querySelector('.score').textContent)
    );
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.message').style.color = 'Black';

    return;
  } else if (guess < 0 || guess > 20) {
    document.querySelector('.message').textContent =
      'Oops! Number out of range.';
    document.querySelector('body').style.backgroundColor = '#a09307';
    document.querySelector('.message').style.color = 'Black';
  }
  if (Number(document.querySelector('.score').textContent) <= 1) {
    document.querySelector('.message').textContent = 'You lost the game! 😢';
    document.querySelector('body').style.backgroundColor = 'Red';
    document.querySelector('.message').style.color = 'Black';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').style.color = '#eee';
  document.querySelector('.number').textContent = '?';
  number = Math.trunc(Math.random() * 20) + 1;
});
