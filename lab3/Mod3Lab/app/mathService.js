'use strict';

function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function squareRoot(number) {
    return Math.sqrt(number);
}

var mathService = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    power: power,
    squareRoot: squareRoot
};