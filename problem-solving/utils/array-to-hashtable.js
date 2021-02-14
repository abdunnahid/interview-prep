const arrayToHashTable = (array) => {

    const hashTable = {};

    for (let i = 0; i < array.length; i++) {  // O(n)
        hashTable[array[i]] = array[i];
    }

    return hashTable;

}

module.exports = arrayToHashTable;

// Analysis
// Time: O(n)
// Space: O(1)