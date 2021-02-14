const lcm = require('./6.find-lcm');

const lcmOfArrayOfNumbers = (numbers) => {

    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        result = lcm(numbers[i], result);
    }
    return result;
}

const result = lcmOfArrayOfNumbers([2, 7, 3, 9, 4]);
console.clear();
console.log("Result: ", result)

// Analysis
// Time: O(n * max(a,b))
// Space: O(1)
module.exports = lcmOfArrayOfNumbers;
