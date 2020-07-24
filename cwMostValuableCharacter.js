//Most Valuable Character

// In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the lexicographically lowest character. [For Golang return rune]
// All inputs will be lower case.

// For example:
// solve('a') = 'a'
// solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
// solve("axyzxyz") = 'x'

function solve(st) {
    let vals = {};
    st.split('').forEach((el) => {
        vals[el] = Math.abs(st.indexOf(el) - st.lastIndexOf(el));
    });
    let highest = Math.max(...Object.values(vals));
    return String.fromCharCode(
        Math.min(
            ...Object.entries(vals).filter(el => {
                return el[1] === highest;
            }).map(el => {
                return el[0].charCodeAt(0);
            })
        )
    );
}