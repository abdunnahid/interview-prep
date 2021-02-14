const gcdEuclid = require('./4.find-gcd-euclid');

const gcdOfArrayOfNumbers = (numbers) => {

    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        result = gcdEuclid(numbers[i], result);

        if (result === 1) {
            return result;
        }

    }
    return result;
}

const result = gcdOfArrayOfNumbers([2, 4, 6, 8, 16]);
console.clear();
console.log("Result: ", result)

// Analysis
// Time: O(n * max(a,b))
// Space: O(1)

module.exports = gcdOfArrayOfNumbers;