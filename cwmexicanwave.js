//Mexican Wave

// Task
//  	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  	1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
    if(str === ''){return []} else{
    let arr = [];
    let newArr = [];
    let count = 0;

    for (let h = 0; h < str.length; h++) {
        if (str[h] === ' ') {
            count++;
        }
    }

    for (let i = 0; i < str.length - count; i++) {
        arr.push(' ');

        for (let j = 0; j < str.length; j++)
            if (str[j] === ' ') {
                arr.push(',');
            } else {
                arr.push(str[j]);
            }
    }

    arr.shift('');

    let num = str.length;

    for (let k = 0; k < arr.length; k += num + 2) {
        if (arr[k] === ',') {
            k -= num + 1;
        } else if (arr[k] === ' ') {
            k -= num + 1;
        } else {
            arr[k] = arr[k].toUpperCase();
        }
    }

    for (let l = 0; l < arr.length; l++) {
        if (arr[l] === ' ') {
            arr[l] = '/';
        } else if (arr[l] === ',') {
            arr[l] = ' ';
        }
    }

    // console.log(arr.join('').split('/'));
    return arr.join('').split('/');
}
}

wave('a      b    ');
