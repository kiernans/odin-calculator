let x = '';
let y = '';
let operator = '';
let stack = [];

const container = document.querySelector('.container');
const screen = document.querySelector('.screen');
const clear = document.querySelector('.clear');


const sum = (x,y) => x+y;
const subtract = (x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => x/y;

const operate = (operator, x, y) => {
    if(operator === '+') return sum(x,y);
    if(operator === '-') return subtract(x,y);
    if(operator === '*') return multiply(x,y);
    if(operator === '/') return divide(x,y);
}

const setScreen = (content) => {           
    screen.textContent = content;
};

const getNumbers = (button) => x += button.textContent;

const getOperator = (button) => operator = button.textContent;

const resetVariables = () => {
    x = '';
    y = '';
    operator = '';
    screen.textContent = '';
};


const addEventListeners = () => {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach((button) => {
        button.addEventListener('click', () => {
            getNumbers(button);
            setScreen(x);
        });
    });

    const operators = document.querySelectorAll('.operator');
    operators.forEach((button) => {
        button.addEventListener('click', () => {
            getOperator(button);
            setScreen(operator);
        })
    });

    clear.addEventListener('click', () => resetVariables());
}


container.insertBefore(screen,clear);

addEventListeners();

