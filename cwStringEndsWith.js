// String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    let count = str.length - 1;
    if (ending.length > str.length) {
        return false;
    } else if (ending === '') {
        return true;
    } else {
        for (let i = ending.length - 1; i >= 0; i--) {
            if (ending[i] === str[count]) {
                count--;
                if (i === 0) {
                    return true;
                }
            } else {
                return false;
            }
        }
    }
}