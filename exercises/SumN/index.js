/**
 * SumN
 *
 * Write a function which takes a number N and return sum of numbers between 1 and N.
 *
 * Examples:
 * sumN(5) === 15
 * sumN(100) === 5050
 */

function sumN(n) {
    return n * (n + 1) / 2;
}

module.exports = sumN;
