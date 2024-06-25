
const randomNumber = parseInt(Math.random() * 10 + 1);
let count = 5;
let gameOver = false;
document.getElementById('cnt').innerHTML = count;

let prguess = [];

const refresh = document.querySelector('#refresh');

function rotate() {
    refresh.style.transition = "transform 0.5s";
    refresh.style.transform = "rotate(360deg)";

    setTimeout(function () {
        location.reload();
    }, 500);
}


refresh.addEventListener('click', rotate);




document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    if (gameOver) {
        return;
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

    }

    document.getElementById('cnt').innerHTML = count;
    const result = document.querySelector('#result');

    if (randomNumber == v1) {
        result.innerHTML = "Congratulations You got the right number!"
        gameOver = true;
    } else {
        result.innerHTML = `Try again!`
    }

    if (count === 0) {
        gameOver = true;
        Value1.disabled = true; 
        feedback.textContent = "Game Over! You can no longer make guesses.";
    }

    let arr = document.getElementById('prg');
    arr.innerText = prguess;

    Value1.value = '';
});
