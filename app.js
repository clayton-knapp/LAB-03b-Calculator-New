// import functions and grab DOM elements

import { add } from './math-utils.js';
import { subtract } from './math-utils.js';
import { multiply } from './math-utils.js';
import { divide } from './math-utils.js';

const addend1 = document.getElementById('addend1');
const addend2 = document.getElementById('addend2');
const addButton = document.getElementById('add-button');
const sumDisplay = document.getElementById('sum');

const minuend = document.getElementById('minuend');
const subtrahend = document.getElementById('subtrahend');
const subtractButton = document.getElementById('subtract-button');
const differenceDisplay = document.getElementById('difference');

const multiplicand = document.getElementById('multiplicand');
const multiplier = document.getElementById('mulitplier');
const multiplyButton = document.getElementById('multiply-button');
const productDisplay = document.getElementById('product');

const dividend = document.getElementById('dividend');
const divisor = document.getElementById('divisor');
const divideButton = document.getElementById('divide-button');
const quotientDisplay = document.getElementById('quotient');


// initialize state

// set event listeners 

addButton.addEventListener('click', () =>{
  const sum = add(addend1.valueAsNumber, addend2.valueAsNumber);
  sumDisplay.textContent = sum;
});

subtractButton.addEventListener('click', () =>{
  const difference = subtract(minuend.valueAsNumber, subtrahend.valueAsNumber);
  differenceDisplay.textContent = difference;
});

multiplyButton.addEventListener('click', () =>{
  productDisplay.textContent = multiply(multiplicand.valueAsNumber, multiplier.valueAsNumber);
});

divideButton.addEventListener('click', () =>{
  quotientDisplay.textContent = divide(dividend.valueAsNumber, divisor.valueAsNumber);
});




  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
