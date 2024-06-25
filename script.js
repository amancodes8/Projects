document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const Value1 = document.getElementById('guessField');
    const v1 = Value1.value;

    const feedback = document.getElementById('feedback');

    if (v1 < 1 || v1 > 100) {
        feedback.textContent = "Please input values between 1 and 100";
    
    } else {
        feedback.textContent = "Your guess is " + v1;
        // You can add further logic here for the game
    }
});
