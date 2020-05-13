//Sum of Odd Numbers
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(n) {
    let odd = 1;
    let arr = [];
    let limiter = 1;
    for (let j = 0; j < n; j++) {
        let tempArr = [];
        for (let i = 0; i < limiter; i++) {
            tempArr.push(odd);
            if (tempArr.length === limiter) {
                arr.push(tempArr);
            }
            odd += 2;
        }
        limiter++;
    }
    return arr[n-1].reduce((acc, cv) => acc + cv);
}

console.log(rowSumOddNumbers(42));
