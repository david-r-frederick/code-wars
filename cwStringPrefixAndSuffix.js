//String Prefix and Suffix
// In this Kata, you will be given a string and your task will be to return the length of the longest prefix that is also a suffix. A prefix is the start of a string while the suffix is the end of a string. For instance, the prefixes of the string "abcd" are ["a","ab","abc"]. The suffixes are ["bcd", "cd", "d"]. You should not overlap the prefix and suffix.

function solve(s){  
    const possibles = [0];
    s = s.split('');
    for(let i = 1; i <= s.length / 2; i++){
        if(s.slice(0, i).join('') === s.slice(-i).join('')){
            possibles.push(s.slice(0, i).join('').length);
        }
    }
    return Math.max(...possibles);
}
