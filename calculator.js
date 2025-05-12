let display = document.getElementById('display');
let buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let operator = null;
let firstOperand = null;
let calculationString = ''; // To store the full calculation

function updateDisplay(value) {
    display.value = value;
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    calculationString = '';
    updateDisplay('');
}

function handleNumberClick(value) {
    currentInput += value;
    calculationString += value;
    updateDisplay(calculationString);
}

function handleOperatorClick(op) {
    if (currentInput === '') return;

    if (firstOperand !== null) {
        calculateResult();
    }

    firstOperand = parseFloat(currentInput);
    operator = op;
    calculationString += ` ${op} `;
    currentInput = '';
    updateDisplay(calculationString);
}

function calculateResult() {
    if (operator === null || firstOperand === null || currentInput === '') return;

    let secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                alert("Cannot divide by zero");
                clearDisplay();
                return;
            }
            result = firstOperand / secondOperand;
            break;
    }

    calculationString += ` = ${result}`;
    updateDisplay(calculationString); // Display the whole calculation
    currentInput = result.toString();
    firstOperand = result;
    operator = null;
    calculationString = result.toString(); // Prepare for next input
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;
        if (value >= '0' && value <= '9' || value === '.') {
            handleNumberClick(value);
        } else if (['+', '-', '*', '/'].includes(value)) {
            handleOperatorClick(value);
        } else if (value === '=') {
            calculateResult();
        } else if (value === 'C') {
            clearDisplay();
        }
    });
});