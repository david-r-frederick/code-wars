//Split and then add both sides of an array together

// Task
// You will receive an array as parameter that contains 1 or more integers and a number n.
// Here is a little visualization of the process:
// Step 1: Split the array in two:
// [1, 2, 5, 7, 2, 3, 5, 7, 8]
//       /            \
// [1, 2, 5, 7]    [2, 3, 5, 7, 8]
// Step 2: Put the arrays on top of each other:
//    [1, 2, 5, 7]
// [2, 3, 5, 7, 8]
// Step 3: Add them together:
// [2, 4, 7, 12, 15]
// Repeat the above steps n times or until there is only one number left, and then return the array.

function splitAndAdd(arr, n) {
    let newArr = [];
    let splitPoint = Math.floor(arr.length / 2);
    let arrOne = arr.slice(0, splitPoint);
    let arrTwo = arr.slice(splitPoint);
    for (let i = 0; i < n; i++) {
        if (arrTwo.length > arrOne.length) {
            arrOne.unshift(0);
        }
        for (let j = arrTwo.length - 1; j > -1; j--) {
            newArr.unshift(arrTwo[j] + arrOne[j]);
        }
        splitPoint = Math.floor(newArr.length / 2);
        arrOne = newArr.slice(0, splitPoint);
        arrTwo = newArr.slice(splitPoint);
        if (n - i === 1) {
            return newArr;
        } else {
            newArr = [];
        }
    }
    return arr;
}

console.log(splitAndAdd([], 3));
