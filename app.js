// import functions and grab DOM elements

import { add } from './math-utils.js';
import { subtract } from './math-utils.js';
import { multiply } from './math-utils.js';
import { divide } from './math-utils.js';
import { checkNumbers } from './math-utils.js';

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');

const resultDisplay = document.getElementById('result-display');


// initialize state

// set event listeners 

addButton.addEventListener('click', () =>{
  checkNumbers(input1.value.length, input2.value.length);
  resultDisplay.textContent = add(input1.valueAsNumber, input2.valueAsNumber);
});

subtractButton.addEventListener('click', () =>{
  checkNumbers(input1.value.length, input2.value.length);
  resultDisplay.textContent = subtract(input1.valueAsNumber, input2.valueAsNumber);
});

multiplyButton.addEventListener('click', () =>{
  checkNumbers(input1.value.length, input2.value.length);
  resultDisplay.textContent = multiply(input1.valueAsNumber, input2.valueAsNumber);
});

divideButton.addEventListener('click', () =>{
  checkNumbers(input1.value.length, input2.value.length);
  resultDisplay.textContent = divide(input1.valueAsNumber, input2.valueAsNumber);
});




  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
