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

function incrementString (strng) {
    strng = strng.split('');
    let letters;
    if (strng.includes('0')){
        let splitPoint = strng.indexOf('0');
        letters = strng.slice(0, splitPoint);
    } else {
        let nums = strng.filter(n => parseInt(n));
        console.log(nums);
        // let splitPoint = strng.
    }

    return letters;
}

console.log(incrementString('fooo0543'));