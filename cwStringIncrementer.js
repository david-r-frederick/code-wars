//String incrementer

// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (string) {
    if(string === ""){
        return "1";
    }
    string = string.split('');
    let letters = [];
    let zeros = [];
    let numbers = [];
    let reachedFirstNumber = false;
    for(let i = 0; i < string.length; i++){
        if(Number.isNaN(parseInt(string[i]))){
            letters.push(string[i]);
        }
        if(parseInt(string[i])){
            reachedFirstNumber = true;
            numbers.push(string[i])
        }
        if(string[i] === '0' && reachedFirstNumber === false){
            zeros.push(string[i])
        } else if (string[i] === '0' && reachedFirstNumber){
            numbers.push(string[i]);
        }
    }
    let originalNumsLength = numbers.length;
    if(numbers.length > 0){
        numbers = (parseInt(numbers.join('')) + 1).toString().split('');
    } else if (zeros.length > 0){
        zeros[zeros.length - 1] = '1';
    } else {
        letters.push('1');
    }
    let laterNumsLength = numbers.length;
    if(laterNumsLength > originalNumsLength && zeros.length > 0){
        zeros.pop();
    }
    return letters.join('') + zeros.join('') + numbers.join('');
}

console.log(incrementString('foobar'));
