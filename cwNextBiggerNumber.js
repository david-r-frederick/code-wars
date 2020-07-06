// //Next bigger number with the same digits
/*
Pseudo Code
1. Check if all digits are in descending order. If so, return -1
2. Check if the second to last digit is less than the last. If so, switch them and return
3. Find first non-increasing number from right side of n,
    switch it with the lowest number greater than it on the right
    then sort the numbers to the right of the first and return
*/

function nextBigger(n) {
    if(n === parseInt(n.toString().split('').sort((a, b) => b - a).join(''))){
        return -1;
    }
    let firstDigit;
    let firstDigitIndex;
    let secondDigit;
    let secondDigitIndex;
    n = n.toString().split('');
    if(+n[n.length - 2] < +n[n.length - 1]){
        const temp = n[n.length - 1];
        n[n.length - 1] = n[n.length - 2];
        n[n.length - 2] = temp;
        return +n.join('');
    }
    for(let i = n.length - 1; i >= 0; i--){
        if((n[i] > n[i - 1])){
            firstDigit = +n[i - 1];
            firstDigitIndex = i - 1;
            break;
        }
    }
    secondDigit = Math.min(...n.slice(firstDigitIndex + 1).filter(el => parseInt(el) > firstDigit));
    for(let i = n.length - 1; i >= 0; i--){
        if(n[i] === secondDigit.toString()){
            secondDigitIndex = i;
            break;
        }
    }
    n[firstDigitIndex] = secondDigit.toString();
    n[secondDigitIndex] = firstDigit.toString();
    let rightSideSorted = n.splice(firstDigitIndex + 1).sort();
    return +n.concat(rightSideSorted).join('');
}
