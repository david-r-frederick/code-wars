//Return the first M multiples of N
// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.
// multiples(3, 5.0)
// should return
// [5.0, 10.0, 15.0]

//Solution 1 (without recursion)
// function multiples(m, n){
//     let answerArr = [];
//     for(let i = 1; i <= m; i++){
//         answerArr.push(n * i);
//     }
//     return answerArr;    
// }

//Solution 2 (with recursion)
multiples = (m, n) => {
    return m > 0 ? [...multiples(m - 1, n), n * m] : [];
}

console.log(multiples(3, 5.0));