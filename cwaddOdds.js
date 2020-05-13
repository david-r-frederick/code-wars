// function factorial (n){
//     if(n === 1 || n === 0){
//         return 1;
//     } else {
//         return n * factorial(n-1);
//     }
// }

// console.log(factorial(170));

// Write a recursive function that returns the sum of the odd digits of a number. ...
// For example, for the input number 321 the function will return 4, and for the input 28 it will return 0.
// Use recursion to solve this problem

// function addOdds (number){
//     count = 0;
//     for (let i = 0; i < number.length; i++){
//         if(parseInt(number[i]) % 2 === 1){
//             count = count + parseInt(number[i]);
//         }
//     }
//     return count;
// }

// addOdds('321');

function addOddsRecursive(n, total = 0) {
    if (n) {
        total += parseInt(digit);
    }
    return total;
}

console.log(addOddsRecursive('321'));
