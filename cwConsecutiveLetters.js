//Consecutive Letters

//In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.
// For example: 
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive, and c is missing.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True

function solve(s){
    s = s.split('').sort().join('');
    for(let i = 0; i < s.length - 1; i++){
        if(s.charCodeAt(i) + 1 !== s.charCodeAt(i + 1)){
            return false;
        }
    }
    return true;
}