const arrayToHashTable = require('../utils/array-to-hashtable');
const findAllFactorsSorted = require('./1.find-all-factors');

const findAllCommonFactors = (numberOne, numberTwo) => {

    // Step 1: Find all the factors of the given numbers
    const numberOneFactors = findAllFactorsSorted(numberOne); // O(sqrt(n))
    const numberTwoFactors = findAllFactorsSorted(numberTwo); // O(sqrt(m))

    // Step 2: Find the common numbers of the factors
    const numberOneHashTable = arrayToHashTable(numberOneFactors); // O(n)

    const result = [];

    for (let i = 0; i < numberTwoFactors.length; i++) {  // O(m)
        // Check is this key exist in HassTable
        if (numberTwoFactors[i] in numberOneHashTable) {
            result.push(numberTwoFactors[i]);
        }
    }

    return result;
}

const result = findAllCommonFactors(36, 60);
// console.clear();
console.log("Result: ", result)

// Analysis
// Time: O(n+m)
// Space: O(n)
// Gain: Sorted

module.exports = findAllCommonFactors;