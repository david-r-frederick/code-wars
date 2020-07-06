//Alternate Capitalization
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.

function capitalize(s){
    //Solution 1 (hard to read);
    // return [s.split('').map((val, index) => {
    //     if(index % 2 === 0){
    //         return val.toUpperCase();
    //     } else {
    //         return val;
    //     }
    // }).join(''),s.split('').map((val, index) => {
    //     if(index % 2 === 0){
    //         return val;
    //     } else {
    //         return val.toUpperCase();
    //     }
    // }).join('')];
    //Solution 2
    const evensCapped = s.split('');
    const oddsCapped = s.split('');
    for(let i = 0; i < s.length; i++){
        if(i % 2 === 0){
            oddsCapped[i] = oddsCapped[i].toUpperCase();
        } else {
            evensCapped[i] = evensCapped[i].toUpperCase();
        }
    }
    return [oddsCapped.join(''), evensCapped.join('')];
};

console.log(capitalize("abcdef"));