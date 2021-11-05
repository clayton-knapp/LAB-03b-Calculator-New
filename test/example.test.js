// IMPORT MODULES under test here:
import { add } from '../math-utils.js';
import { subtract } from '../math-utils.js';
 import { multiply } from '../math-utils.js';
 import { divide } from '../math-utils.js';

const test = QUnit.test;



// when we write a test we're documenting what we want a function to take in and what we want it to spit out
// if in the future somebody changes how the function works, they may break the tests

test('add() should take in 1 and 1 and output 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    //we expect te result to be 2
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const

    //here is what we actually get instead
    const actual = add(1, 1);

    //Expect
    // Make assertions about what is expected versus the actual result

    //lets compare what we expect to what we actually got if they are equal the test passes
    expect.equal(actual, expected);
});



test('add() should take in -420 and -69 and output -489', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    //we expect te result to be
    const expected = -489;
    
    //Act 
    // Call the function you're testing and set the result to a const

    //here is what we actually get instead
    const actual = add(-420, -69);

    //Expect
    // Make assertions about what is expected versus the actual result

    //lets compare what we expect to what we actually got if they are equal the test passes
    expect.equal(actual, expected);
});


test('subtract() should take in 11 and 4 and output 7', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    //we expect te result to be
    const expected = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const

    //here is what we actually get instead
    const actual = subtract(11, 4);

    //Expect
    // Make assertions about what is expected versus the actual result

    //lets compare what we expect to what we actually got if they are equal the test passes
    expect.equal(actual, expected);
});

test('subtract() should take in 6 and 0 and output -6', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    //we expect te result to be
    const expected = -6;
    
    //Act 
    // Call the function you're testing and set the result to a const

    //here is what we actually get instead
    const actual = subtract(0, 6);

    //Expect
    // Make assertions about what is expected versus the actual result

    //lets compare what we expect to what we actually got if they are equal the test passes
    expect.equal(actual, expected);
});

test('subtract() should take in 6 and 0 and output -6', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    //we expect te result to be
    const expected = -6;
    
    //Act 
    // Call the function you're testing and set the result to a const

    //here is what we actually get instead
    const actual = subtract(0, 6);

    //Expect
    // Make assertions about what is expected versus the actual result

    //lets compare what we expect to what we actually got if they are equal the test passes
    expect.equal(actual, expected);
});

test('multiply() should take in 4 and 3 and output 12', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    //we expect te result to be
    const expected = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const

    //here is what we actually get instead
    const actual = multiply(4, 3);

    //Expect
    // Make assertions about what is expected versus the actual result

    //lets compare what we expect to what we actually got if they are equal the test passes
    expect.equal(actual, expected);
});

test('multiply() should take in 90 and 6 and output 540', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    //we expect te result to be
    const expected = 540;
    
    //Act 
    // Call the function you're testing and set the result to a const

    //here is what we actually get instead
    const actual = multiply(90, 6);

    //Expect
    // Make assertions about what is expected versus the actual result

    //lets compare what we expect to what we actually got if they are equal the test passes
    expect.equal(actual, expected);
});

test('divide() should take in 9 and 3 and output 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    //we expect te result to be
    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const

    //here is what we actually get instead
    const actual = divide(9, 3);

    //Expect
    // Make assertions about what is expected versus the actual result

    //lets compare what we expect to what we actually got if they are equal the test passes
    expect.equal(actual, expected);
});

test('divide() should take in 9 and 0 and output undefined', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    //we expect te result to be
    const expected = 'undefined';
    
    //Act 
    // Call the function you're testing and set the result to a const

    //here is what we actually get instead
    const actual = divide(9, 0);

    //Expect
    // Make assertions about what is expected versus the actual result

    //lets compare what we expect to what we actually got if they are equal the test passes
    expect.equal(actual, expected);
});


