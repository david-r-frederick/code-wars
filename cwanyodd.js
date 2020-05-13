function anyOdd(x) {
    let binaryNum = x.toString(2); //accepted number in binary

    while (binaryNum.length < 32) {
        binaryNum = '0' + binaryNum;
    }

    let result = 0;

    for (i = 0; i < binaryNum.length; i += 2) {
        if (binaryNum[i] === '1') {
            result = 1;
        } else if (i === 31 && binaryNum[i] !== 1){
            result = 0;
        }
    }
    return result;
}

// console.log(anyOdd(5));
console.log(anyOdd(5));

// 000000000000000000000000000001"0"1
