//Simple Square Numbers
// In this Kata, you will be given a number n (n > 0) and your task will be to return the smallest square number N (N > 0) such that n + N is also a perfect square. If there is no answer, return -1 (nil in Clojure, Nothing in Haskell).

function solve(n){
    for(let i = 1; i <= n / 2; i++){
        if(Math.sqrt((i * i) + n) % 1 === 0){
            return i * i;
        };
    }
    return -1;
}