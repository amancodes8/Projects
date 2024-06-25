
const randomNumber = parseInt(Math.random() * 10 + 1);
let count = 5;
let gameOver = false;
document.getElementById('cnt').innerHTML = count;

let prguess = [];



document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  if (gameOver) {
    return; // Exit early if game is over
  }

  const Value1 = document.getElementById('guessField');
  const v1 = Value1.value;

  const feedback = document.getElementById('feedback');

  let flag = 0;

  if (v1 < 1 || v1 > 10) {
    feedback.style.display = "block";
    feedback.textContent = "Please enter values between 1 and 10!";
    feedback.style.border = '1px solid red';
  } else {
    flag = 1;
    count = count - 1;
    feedback.style.display = "none";
    prguess.push(v1);

    // You can add further logic here for the game
  }

  document.getElementById('cnt').innerHTML = count;
  const result = document.querySelector('#result');

  if(randomNumber == v1){
    result.innerHTML = "Congratulations You got the right number!"
    gameOver = true;
  }else{
    result.innerHTML = `Try again!`
  }

  // Check if count has reached 0
  if (count === 0) {
    gameOver = true;
    Value1.disabled = true; // Disable input field
    feedback.textContent = "Game Over! You can no longer make guesses.";
  }

   let arr = document.getElementById('prg');
   arr.innerText = prguess;

  // Reset input field for the next guess
  Value1.value = '';
});
