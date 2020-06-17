function makeTriangle(m, n) {
    const arrayOfTriangulars = [];
    let difference = n - m + 1;
    const arrayOfRows = [];
    let answerString = '';
    let rowsNeeded;
    let bottomRightCorner;
    for (let i = 0; i < n; i++) {
        let value = 0;
        for (let j = i; j >= 1; j--) {
            value += j;
        }
        arrayOfTriangulars.push(value);
        if (value >= difference) {
            break;
        }
    }
    if (!arrayOfTriangulars.includes(difference)) {
        return '';
    } else {
        rowsNeeded = arrayOfTriangulars.indexOf(difference);
        bottomRightCorner = rowsNeeded;
    }
    while (rowsNeeded > 0) {
        arrayOfRows.push([]);
        rowsNeeded--;
    }
    arrayOfRows[0][0] = m;
    for (let i = bottomRightCorner - 1; i >= 0; i--) {
        arrayOfRows[arrayOfRows.length - 1][i] = bottomRightCorner;
        bottomRightCorner++;
    }
    console.log(arrayOfTriangulars);
    return arrayOfRows;
}

console.log(makeTriangle(1, 21));

// 3,2
// 6,3
// 10,4
// 15,5
// 21,6

// 17-7=10
// 16-8=8
// 15-9=6
// 14-10=4
