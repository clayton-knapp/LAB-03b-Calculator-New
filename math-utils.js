//math functions here

export function add(addend1, addend2){
    return addend1 + addend2;
};

export function subtract(minuend, subtrahend){
    return minuend - subtrahend;
};

export function multiply(multiplicand, multiplier){
    return multiplicand * multiplier;
};

export function divide(dividend, divisor){
    if (divisor != 0) {
        return dividend / divisor;
    };
    if (divisor === 0) {
        return 'undefined';
    };
};