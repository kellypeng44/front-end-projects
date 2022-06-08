const { resolveObjectURL } = require("buffer");
const { normalize } = require("path/posix");

// Execute the function passed to forEach for each element in the array
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
};

// Return a new array which contains the return result of running each item through the function passed to map
function map(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// Return a new array which only contains values that return true to the function passed to filter
function filter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) result.push(array[i]);
    }
    return result;
}

// Reduce the array to one single value by starting the sum at the second value passed to reduce and updating the sum with the return value of each iteration
// callback=how we reduce, secondparameter=start value
function reduce(array, callback, initial) {
    let sum = initial;
    for (let i = 0; i < array.length; i++) {
        if (i == 0 && initial == null) {
            sum = array[i];
        } else {
            sum = callback(sum, array[i], i, array);
        }
    }

    return sum;
}

// Return true if at least one element in the array returns true from the function passed to some
function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) return true;
    }
    return false;
}

// Return true if every element in the array returns true from the function passed to every
function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) return false;
    }
    return true;
}

// Select the first element that returns true to the function passed to find
function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) return array[i];
    }
    return undefined;
}

// recursively, depth = 1 by default
function flat(array, depth = 1) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (Array.isArray(element) && depth > 0) {
            result.push(...flat(element, depth - 1));
        } else {
            result.push(element);
        }
    }

    return result;
}

// using stack: only work with flatting out the whole array
function flat2(array) {
    const stack = [...array];
    const result = [];
    while (stack.length) {
        let tem = stack.pop();
        if (Array.isArray(tem)) {
            stack.push(...tem);
        } else {
            result.push(tem);
        }
    }

    return result.reverse();
}

module.exports = {
    forEach,
    map,
    filter,
    reduce,
    some,
    every,
    flat,
    find,
};