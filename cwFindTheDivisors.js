// Find the divisors!

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

let arr2 = [];
let i = 2;

function divisors(integer) {
    if (i >= integer) {
        if (arr2.length === 0) {
            arr2 = [];
            i = 2;
            return `${integer} is prime`;
        } else {
            let arr3 = arr2;
            arr2 = [];
            i = 2;
            return arr3;
        }
    } else if (integer % i === 0) {
        arr2.push(i);
        i++;
        return divisors(integer);
    } else {
        i++;
        return divisors(integer);
    }
}