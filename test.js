function nextBigger(n) {
    const possibleValues = [];
    n = Array.from(String(n), Number);
    for(let i = 0; i < n.length; i++){
        for (let j = 0; j < n.length; j++) {
            const 
            const straight = parseInt(p.join(''));
            const reversed = parseInt(straight.toString().split('').reverse().join(''));
            if(!possibleValues.includes(straight)){
                possibleValues.push(straight);
            }
            if(!possibleValues.includes(reversed)){
                possibleValues.push(reversed);
            }
        }
    }
    const noLittles = possibleValues
        .filter((value) => value >= parseInt(n.join('')))
        .sort((a, b) => a - b);
    //compares original value to second highest value, if different, returns second
    if (noLittles[1] > noLittles[0]) {
        return noLittles[1];
    }
    return -1;
}
console.log(nextBigger(513));

// const arr = [1, 2, 3, 4];
// const chunk = arr.splice(0, 2);
// arr.splice(1, 0, ...chunk);
// console.log(arr);
