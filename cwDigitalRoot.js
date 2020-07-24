// Sum of Digits/Digital Root

//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
    n = n.toString().split('').map(el => parseInt(el)).reduce((x, y) => x + y, 0); 
    if(n / 10 < 1){ 
        return n;
    }
    return digital_root(n);
}