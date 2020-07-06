//Normalizing Out of Range Array Indexes
// Implement a function that normalizes out of range sequence indexes (converts them to 'in range' indexes) by making them repeatedly 'loop' around the array. The function should then return the value at that index. Indexes that are not out of range should be handled normally and indexes to empty sequences should return undefined/None depending on the language.

// For positive numbers that are out of range, they loop around starting at the beginning.

function normIndex(array, index) {
    console.log(array, index);
    if (index > 0) {
        const remainder = (index % array.length) + 1;
        return array[remainder === 0 ? array.length - 1 : remainder - 1];
    } else {
        const remainder = Math.abs(index % array.length);
        array = array.reverse();
        return array[remainder === -0 ? 0 : remainder - 1];
    }
}

console.log(normIndex([14, 15, 44, 67, 28, 74, 37, 40, 27, 83, 54], -41));
