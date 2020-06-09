//Split Strings
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

//Solution 1 - no regex
// function solution(str) {
//     if (typeof str !== 'string') {
//         return;
//     }
//     const returnArr = [];
//     for (let i = 0; i < str.length; i+=2) {
//         if(str[i + 1]){
//             returnArr.push(([str[i],str[i+1]]).join(''));
//         } else{
//             returnArr.push(([str[i],'_']).join(''));
//         }
//     }
//     return returnArr;
// }

//Solution 2 - with regex
function solution(str) {
    if (typeof str !== 'string' || str === '') {
        return [];
    }
    if(str.length % 2 === 1){
        str += '_';
    }
    return str.match(/../g);
}

console.log(solution('abcdefg'));