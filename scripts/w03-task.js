/* LESSON 3 - Programming Tasks */

/* FUNCTIONS*/
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let number1 = Number(document.querySelector('#add1').value);
    let number2 = Number(document.querySelector('#add2').value);
    const sum = add(number1, number2);
    document.querySelector('#sum').value = sum
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let subtract1 = Number(document.querySelector(`#subtract1`).value);
    let subtract2 = Number(document.querySelector(`#subtract2`).value);
    document.querySelector(`#difference`).value = subtract(subtract1, subtract2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let divindend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divindend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */
const currentDate = new Date();

let currentYear = currentDate.getFullYear();

document.querySelector('#year').value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
let odds = numbersArray.filter((odd) => odd % 2 === 1);

document.querySelector('#odds').textContent = odds;
/* Output Evens Only Array */

let evens = numbersArray.filter((even) => even % 2 === 0);

document.querySelector('#evens').textContent = evens;

/* Output Sum of Org. Array */
const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

document.querySelector('#sumOfArray').textContent = sum;
/* Output Multiplied by 2 Array */
const mul = numbersArray.map(number => number * 2);

document.querySelector('#multiplied').textContent = mul;
/* Output Sum of Multiplied by 2 Array */

const sum2 = mul.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

document.querySelector('#sumOfMultiplied').textContent = sum2;