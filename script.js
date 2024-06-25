
const randomNumber = parseInt(Math.random() * 10 + 1);
console.log(randomNumber);

let count = 5;
let gameOver = false;
let prguess = [];

const refresh = document.querySelector('#refresh');
const Value1 = document.getElementById('guessField');
const feedback = document.getElementById('feedback');
const result = document.querySelector('#result');
const hideOnWin = document.querySelector('#hideOnWin');
const arr = document.getElementById('prg');
document.getElementById('cnt').innerHTML = count;


function rotate() {
    refresh.style.transition = "transform 0.5s";
    refresh.style.transform = "rotate(360deg)";

    setTimeout(function () {
        location.reload();
    }, 500);
}

function handleSubmit(e) {
    e.preventDefault();

    if (gameOver) {
        return;
    }

    const v1 = Value1.value.trim();

    let flag = 0;

    if (v1 < 1 || v1 > 10 || isNaN(v1)) {
        feedback.style.display = "block";
        feedback.textContent = "Please enter values between 1 and 10!";
        feedback.style.border = '1px solid red';
    } else {
        flag = 1;
        count--;
        feedback.style.display = "none";
        prguess.push(v1);
    }

    document.getElementById('cnt').innerHTML = count;

    if (randomNumber == v1) {
        result.innerHTML = "Congratulations! You got the right number! Please restart";
        gameOver = true;
        hideOnWin.style.display = "none";
        result.style.fontSize = "larger";
        Value1.disabled = true;
    } else {
        result.innerHTML = `Try again!`;
    }

    if (count === 0) {
        gameOver = true;
        Value1.disabled = true;
        feedback.style.display = "block";
        hideOnWin.style.display = "none";
        if(v1 != randomNumber){
            feedback.textContent = "Game Over! You can no longer make guesses. Please restart";
        }
    }

    arr.innerText = prguess.join(', '); 
    Value1.value = '';
}


refresh.addEventListener('click', rotate);
document.getElementById('form').addEventListener('submit', handleSubmit);
