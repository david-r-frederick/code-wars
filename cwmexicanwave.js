//Mexican Wave

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

    // console.log(arr);

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
