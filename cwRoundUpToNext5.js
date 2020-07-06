//Round up to the Next Multiple of 5
// Given an integer as input, can you round it to the next (meaning, "higher") 5?

//Solution 1
// function roundToNext5(n){
//     if(n / 5 % 1 === 0 || n === 0){
//         return n;   
//     }
//     for(let i = 1; i < 5; i++){
//         if((n + i) % 5 === 0){
//             return n + i; 
//         }
//     }
// }

//Solution 2
// function roundToNext5(n){
//     if((n / 5) % 1 === 0 || n === 0){
//         return n;   
//     }
//     if(n > 0){
//         const remainder = n % 5;
//         return (5 - remainder) + n;
//     } else {
//         n = n * -1;
//         const remainder = n % 5;
//         const positiveAnswer = (5 - remainder) + n;
//         return positiveAnswer * -1 + 5;
//     }
// }

//Solution 3
function roundToNext5(n){
    return Math.ceil(n/5)*5;
}