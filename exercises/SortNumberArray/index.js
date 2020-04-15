/**
 * SortNumberArray
 *
 * Write a function which takes array of integers and returns them sorted in ascending order.
 *
 * Examples:
 * sortNumberArray([3, 1, -9, 9, 3]) === [-9, 1, 3, 3, 9]
 */

function sortNumberArray(arr) {
    return arr.sort(function(a, b) {return a - b});
}

module.exports = sortNumberArray;
