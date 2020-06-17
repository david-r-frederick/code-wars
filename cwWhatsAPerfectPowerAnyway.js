// // What's a Perfect Power anyway?
// Your task is to check whether a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.
// Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

//Solution 1. Times out on Codewars
// const arrOfAnswers = [];
// const arrOfDivisors = [];
// let startValue = 2;
// function isPP(n){
//     if(arrOfAnswers.includes(n)){
//         const answerIndex = arrOfAnswers.indexOf(n);
//         return arrOfDivisors[answerIndex];
//     };
//     for(let i = startValue; i <= n / 2; i++){
//         for(let j = 2; j < 10; j++){
//             arrOfAnswers.push(Math.pow(i, j));
//             arrOfDivisors.push([i, j]);
//         }
//         startValue++;
//     }
//     const answerIndex = arrOfAnswers.indexOf(n);
//     return arrOfAnswers.includes(n) ? arrOfDivisors[answerIndex] : null;
// }


//Solution 2
function isPP(n){
    for(let i = 2; i < 17; i++){
        if(Math.pow(n, 1/i) % 1 === 0){
            return [Math.pow(n, 1/i), i];
        } else if (Math.pow(n, 1/i) % 1 > 0.999999999999){
            return [Math.ceil(Math.pow(n, 1/i)), i];
        } else if (Math.pow(n, 1/i) % 1 < 0.000001){
            return [Math.floor(Math.pow(n, 1/i)), i];
        }
    }
    return null;
}

console.log(isPP(16807)); //[5, 3];
