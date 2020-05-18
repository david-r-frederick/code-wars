//Multiply Numbers as Strings
// Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid

function multiply(a, b) {
    if (parseInt(a) === 0 || parseInt(b) === 0) {
        return '0';
    }
    a = a
        .replace(/^0+/, '')
        .split('')
        .map((n) => +n);
    b = b
        .replace(/^0+/, '')
        .split('')
        .map((n) => +n);
    const answer = [];
    const rows = [];
    let zeros = [];
    let maxLength = 0;
    let carryValue = 0;

    //ensures that b is the one with fewer numbers
    if (b.length > a.length) {
        let c = Array.from(b);
        b = Array.from(a);
        a = Array.from(c);
    }

    //generate the rows for addition later
    for (let i = b.length - 1; i >= 0; i--) {
        let newLayer = [layer(a, b[i]) + zeros];
        newLayer = newLayer.map((str) => str.replace(/,/g, ''));
        rows.push(newLayer);
        if (newLayer[0].length > maxLength) {
            maxLength = newLayer[0].length;
        }
        zeros.push(0); //adds filler 0s
        if (i === 0) {
            for (let m = 0; m < rows.length; m++) {
                rows[m] = addLeadingZeros(rows[m], maxLength);
            }
        }
    }

    //adds last values of rows and unshifts them to answer array
    for (let k = maxLength - 1; k >= 0; k--) {
        let currentSum = 0;
        for (let n = 0; n < rows.length; n++) {
            currentSum += parseInt(rows[n][k]);
        }
        currentSum += carryValue;
        if (currentSum < 10) {
            answer.unshift(currentSum);
            carryValue = 0;
        } else {
            let tempSumArr = currentSum
                .toString()
                .split('')
                .map((num) => parseInt(num));
            if (k !== 0) {
                answer.unshift(tempSumArr[tempSumArr.length - 1]);
                tempSumArr.pop();
                carryValue = parseInt(tempSumArr.join(''));
            } else {
                tempSumArr.reverse().forEach((el) => answer.unshift(el));
            }
        }
    }
    return answer.join('');
}

//creates layers of answers that will later be added. Amount of rows is equal to smaller of a and b.
function layer(arr, num) {
    let carryVal = 0;
    let row = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] * num + carryVal < 10) {
            row.unshift(arr[i] * num + carryVal);
            carryVal = 0;
        } else {
            if (i !== 0) {
                let mapped = (arr[i] * num + carryVal)
                    .toString()
                    .split('')
                    .map((num) => parseInt(num)); //['2','7'];
                carryVal = 0;
                carryVal += parseInt(mapped.slice(0, mapped.length - 1));
                row.unshift(parseInt(mapped[mapped.length - 1]));
            } else {
                let mapped = (arr[i] * num + carryVal)
                    .toString()
                    .split('')
                    .map((num) => parseInt(num)); //[3,3]
                mapped.reverse().forEach((el) => row.unshift(el));
            }
        }
    }
    return row;
}

//Adds leading zeros to generated rows of results
function addLeadingZeros(arr, max) {
    let temp = arr.join('').split('');
    let diff = max - temp.length;
    for (let i = 0; i < diff; i++) {
        temp.unshift('0');
    }
    return temp;
}
