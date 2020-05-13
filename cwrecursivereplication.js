//Recursive Replication

let arr = [];

function replicate(times, number) {
    if (times === 0) {
        return arr;
    } else if (times < 0){
        return [];
    } else {
        arr.push(number);
        return replicate(times - 1, number);
    }
}

// function factorial (n){
//     if(n === 1 || n === 0){
//         return 1;
//     } else {
//         return n * factorial(n-1);
//     }
// }

console.log(replicate(4, -14));