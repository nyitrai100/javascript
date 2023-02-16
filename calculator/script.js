const userInput = document.getElementById("userInput");

var expression = '';

function press (num){
    expression += num;
    userInput.value = expression;
}