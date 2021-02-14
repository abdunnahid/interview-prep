const findAllCommonFactors = require('./2.find-all-common-factors');

const gcdBF = (numberOne, numberTwo) => {

    // Step 1: Find all the common factors of the given numbers (sorted)
    const commonFactors = findAllCommonFactors(numberOne, numberTwo);

    // Step 2: Return the last element of the sorted common factors
    return commonFactors.pop();
}

const result = gcdBF(36, 60);
console.clear();
console.log("Result: ", result)

// Analysis
// Time: O(n+m)
// Space: O(n)

module.exports = gcdBF;