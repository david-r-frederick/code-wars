//Find the first non-consecutive number

function firstNonConsecutive(arr) {
    if (arr.length === 1) {
        return null;
    } else if (arr[0] + 1 !== arr[1]) {
        return arr[1];
    } else {
        arr.shift();
        return firstNonConsecutive(arr);
    }
}

console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]));
