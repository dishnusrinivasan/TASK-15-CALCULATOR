let expression = '';

function addToDisplay(char) {
    document.getElementById('display').value += char;
    expression += char;
}

function performOperation(operator) {
    if (operator !== '=') {
        document.getElementById('display').value += operator;
        expression += operator;
    } else {
        calculateResult();
    }
}

function calculateResult() {
    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
        expression = result.toString();
    } catch (error) {
        alert('Invalid expression');
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    expression = '';
}

// Keyboard events
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (/[0-9+\-*/%=.]/.test(key)) {
        addToDisplay(key);
    } else {
        alert('Only numbers and operators (+, -, *, /, %) are allowed.');
    }
});
