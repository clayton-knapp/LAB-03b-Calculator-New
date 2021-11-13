// import functions and grab DOM elements

import { add } from './math-utils.js';
import { subtract } from './math-utils.js';
import { multiply } from './math-utils.js';
import { divide } from './math-utils.js';
import { checkNumbers } from './math-utils.js';

const input = document.getElementById('input');

const clearButton = document.getElementById('clear-button');
const sqrtButton = document.getElementById('sqrt-button');
const percentButton = document.getElementById('percent-button');
const divideButton = document.getElementById('divide-button');

const sevenButton = document.getElementById('7-button');
const eightButton = document.getElementById('8-button');
const nineButton = document.getElementById('9-button');
const multiplyButton = document.getElementById('multiply-button');

const fourButton = document.getElementById('4-button');
const fiveButton = document.getElementById('5-button');
const sixButton = document.getElementById('6-button');
const subtractButton = document.getElementById('subtract-button');

const oneButton = document.getElementById('1-button');
const twoButton = document.getElementById('2-button');
const threeButton = document.getElementById('3-button');
const addButton = document.getElementById('add-button');

const decimalButton = document.getElementById('decimal-button');
const zeroButton = document.getElementById('0-button');
const posNegButton = document.getElementById('pos-neg-button');
const equalButton = document.getElementById('equal-button');


const resultDisplay = document.getElementById('result-display');


// initialize state

// set event listeners 

clearButton.addEventListener('click', () => {
    input.value = "";
});

sevenButton.addEventListener('click', () => {
    input.value += sevenButton.innerText;
});

eightButton.addEventListener('click', () => {
    input.value += eightButton.innerText;  
});

nineButton.addEventListener('click', () => {
    input.value += nineButton.innerText;
});


fourButton.addEventListener('click', () => {
    input.value += fourButton.innerText;
});

fiveButton.addEventListener('click', () => {
    input.value += fiveButton.innerText;  
});

sixButton.addEventListener('click', () => {
    input.value += sixButton.innerText;
});


threeButton.addEventListener('click', () => {
    input.value += threeButton.innerText;
});

twoButton.addEventListener('click', () => {
    input.value += twoButton.innerText;  
});

oneButton.addEventListener('click', () => {
    input.value += oneButton.innerText;
});

zeroButton.addEventListener('click', () => {
    input.value += zeroButton.innerText;
});

decimalButton.addEventListener('click', () => {
    input.value += decimalButton.innerText;  
});

posNegButton.addEventListener('click', () => {
    input.value += "-";
});


addButton.addEventListener('click', () =>{
    input.value += addButton.innerText;
});

divideButton.addEventListener('click', () =>{
    input.value += divideButton.innerText;
});

multiplyButton.addEventListener('click', () =>{
    input.value += multiplyButton.innerText;
});

subtractButton.addEventListener('click', () =>{
    input.value += subtractButton.innerText;
});

equalButton.addEventListener('click', () =>{
    // if (operation === "add") {
    input.value = eval(input.value);
      // let result = memory1 + memory2;
      // console.log(result);
      // input.value = result.valueAsNumber;
      
    // };
});




// addButton.addEventListener('click', () =>{
//   checkNumbers(input1.value.length, input2.value.length);
//   resultDisplay.textContent = add(input1.valueAsNumber, input2.valueAsNumber);
// });

// subtractButton.addEventListener('click', () =>{
//   checkNumbers(input1.value.length, input2.value.length);
//   resultDisplay.textContent = subtract(input1.valueAsNumber, input2.valueAsNumber);
// });

// multiplyButton.addEventListener('click', () =>{
//   checkNumbers(input1.value.length, input2.value.length);
//   resultDisplay.textContent = multiply(input1.valueAsNumber, input2.valueAsNumber);
// });

// divideButton.addEventListener('click', () =>{
//   checkNumbers(input1.value.length, input2.value.length);
//   resultDisplay.textContent = divide(input1.valueAsNumber, input2.valueAsNumber);
// });




  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
