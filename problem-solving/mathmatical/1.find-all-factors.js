const findAllFactorsBF = (number) => {

    const factors = [];

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;

}

const resultBF = findAllFactorsBF(12);
console.log("ResultBF: ", resultBF);

// Analysis
// Time: O(n)
// Space: O(1)

// ======================================

const findAllFactors = (number) => {

    const factors = [];

    // Looping till Square Root of the number is enough
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            factors.push(i);
            // check for the duplicate factor
            if (i !== number / i) {
                factors.push(number / i);
            }
        }
    }
    return factors;

}

const result = findAllFactors(12);
console.log("Result: ", result)

// Analysis
// Time: O(sqrt(n))
// Space: O(1)
// Problem: Not sorted

// =================================

const findAllFactorsSorted = (number) => {

    const factors = [];

    // Looping till Square Root of the number is enough
    for (let i = 1; i * i < number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    for (let i = Math.round(Math.sqrt(number)); i >= 1; i--) {
        if (number % i === 0) {
            factors.push(number / i);
        }
    }
    return factors;

}

const resultSorted = findAllFactorsSorted(60);
console.log("Result Sorted: ", resultSorted)

// Analysis
// Time: O(sqrt(n))
// Space: O(1)
// Gain: sorted

module.exports = findAllFactorsSorted;
