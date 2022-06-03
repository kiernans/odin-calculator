let x = '';
let y = '';
let operator = '';
let result = '';

const container = document.querySelector('.container');
const screen = document.querySelector('.screen');
const clear = document.querySelector('.clear');
const solve = document.querySelector('.equals');


const sum = (x,y) => parseFloat(x) + parseFloat(y);
const subtract = (x,y) => parseFloat(x) - parseFloat(y);
const multiply = (x,y) => parseFloat(x) * parseFloat(y);
const divide = (x,y) => parseFloat(x) / parseFloat(y);

const operate = (operator, x, y) => {
    if(operator === '+') return sum(x,y);
    if(operator === '-') return subtract(x,y);
    if(operator === '*') return multiply(x,y);
    if(operator === '/') return divide(x,y);
}

const setScreen = (content) => {           
    screen.textContent = content;
};

const getNumbers = (button, variable) => variable += button.textContent;

const getOperator = (button, variable) => variable = button.textContent;

const resetAllVariables = (bool) => {
    if(bool) {
        screen.textContent = '';
        result = '';
    }
    x = '';
    y = '';
    operator = '';
    
};

const chooseXY = (button) => {
    if(!operator) {
        x = getNumbers(button, x);
        setScreen(x);
    } 
    else if(operator && !x) {
        x = result;
    } else {
        y = getNumbers(button, y);
        setScreen(y);
    }
};

const addEventListeners = () => {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach((button) => {
        button.addEventListener('click', () => {
            chooseXY(button);
        });
    });

    const operators = document.querySelectorAll('.operator');
    operators.forEach((button) => {
        button.addEventListener('click', () => {
            operator = getOperator(button);
            setScreen(operator);
        })
    });

    solve.addEventListener('click', () => {
        result = operate(operator, x, y);
        setScreen(result);
        resetAllVariables(false);
    });

    clear.addEventListener('click', () => resetAllVariables(true));
}

const calculator = () => {
    addEventListeners();
    container.insertBefore(screen, clear);
};

calculator();
