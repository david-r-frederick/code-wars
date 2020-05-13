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
