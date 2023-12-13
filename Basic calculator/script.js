let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== '' && !currentInput.includes(operator)) {
        currentInput += operator;
        updateDisplay();
    }
}

function calculate() {
    try {
        let result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
    }
}

function updateDisplay() {
    display.value = currentInput;
}
