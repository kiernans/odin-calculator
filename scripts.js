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

const container = document.querySelector('.container');

const clear = document.querySelector('.clear');

const screen = document.querySelector('.screen');
screen.textContent = `123456`;
container.insertBefore(screen,clear);

