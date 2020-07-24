//Consecutive Strings

// You are given an array of string inputs strarr and an integer k.
// Your task is to return the longest possible string that can be derived by combining k consecutive elements of the input strarr.

// Example
// longest_consec(["red", "orange", "yellow", "green", "blue", "indigo", "violet"], 2) should return "orangeyellow"

// Notes
// In the case of there being multiple possible matches, only the first one will be considered correct.

// In any of the following cases, the return value should be an empty string "":
    // strarr.length === 0
    // strarr.length < k
    // k <= 0

function longestConsec(strarr, k) {
    if (strarr.length === 0 || k < 1 || k > strarr.length) {
        return '';
    }
    const stringLengths = strarr.map(el => el.length);
    const stringComboSums = [];
    for(let i = 0; i < strarr.length - (k - 1); i++){
        stringComboSums.push(stringLengths.slice(i, i + k).reduce((x, y) => x + y));
    }
    const highestSum = Math.max(...stringComboSums);
    return strarr.slice(stringComboSums.indexOf(highestSum), stringComboSums.indexOf(highestSum) + k).join('');
}
