
// Euclidean algorithm to find GCD
// GCD of two numbers doesn’t change if smaller number is subtracted from a bigger number. 

const gcdEuclid = (numberOne, numberTwo) => {

    while (numberOne && numberTwo && numberOne !== numberTwo) {
        // console.log("🚀 ~ file: 4.find-gcd-euclid.js ~ line 8 ~ gcdEuclid ~ numberOne", numberOne)
        // console.log("🚀 ~ file: 4.find-gcd-euclid.js ~ line 8 ~ gcdEuclid ~ numberTwo", numberTwo)
        // console.log('======================================================================');
        if (numberOne > numberTwo) {
            numberOne = numberOne - numberTwo;
        }
        else {
            numberTwo = numberTwo - numberOne;
        }

    }

    return numberOne || numberTwo;

}

const result = gcdEuclid(36, 60);
console.log("Result gcdEuclid: ", result)

// Analysis
// Time: O(max(a,b))
// Space: O(1)

// =======================================

const gcdEuclidRecursive = (numberOne, numberTwo) => {


    // console.log("🚀 ~ file: 4.find-gcd-euclid.js ~ line 34 ~ gcdEuclidRecursiveEfficient ~ numberOne", numberOne)
    // console.log("🚀 ~ file: 4.find-gcd-euclid.js ~ line 34 ~ gcdEuclidRecursiveEfficient ~ numberTwo", numberTwo)
    // console.log('=========================================================================================');

    if (numberTwo === 0) {
        return numberOne;
    }

    return gcdEuclidRecursive(numberTwo, numberOne % numberTwo);

}

const gcdEuclidRecursiveResult = gcdEuclidRecursive(36, 60);
console.log("Result gcdEuclidRecursive: ", gcdEuclidRecursiveResult)

// Analysis
// Time: O(max(a,b))
// Space: O(1)

module.exports = gcdEuclid;