const gcdEuclid = require('./4.find-gcd-euclid');

const lcm = (numberOne, numberTwo) => {
    return numberOne * numberTwo / gcdEuclid(numberOne, numberTwo);
}

const result = lcm(15, 20);
console.clear();
console.log("Result: ", result)

// Analysis
// Time: O(max(a,b))
// Space: O(1)

module.exports = lcm;