//Recursive Replication

// You need to design a recursive function called replicate which will receive arguments times and number.
// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
// As tempting as it may seem, do not use loops to solve this problem.

//solution 2
function replicate(times, number) {
    return replicateHelper(times, number);
}

function replicateHelper (times, number) {
    if (times <= 0){
        return [];
    } else {
        return [...replicateHelper(times - 1, number), number];
    }
}

//solution 1

// let arr = [];
// function replicate(times, number) {
//     if (times === 0) {
//         return arr;
//     } else if (times < 0){
//         return [];
//     } else {
//         arr.push(number);
//         return replicate(times - 1, number);
//     }
// }


// console.log(replicate(4, -14));