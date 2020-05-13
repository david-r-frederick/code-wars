var splitInteger = function(num, parts) {
    let divided = num / parts;
    if (Number.isInteger(num / parts)) {
        let isoArr = [];
        for(let i = 0; i < parts; i++){
            isoArr[i] = divided;
        }
        return isoArr;
    } else {
        let isoArr = [];
        let floored = Math.floor(divided);
        for(let i = 0; i < parts; i++){
            isoArr[i] = floored;
        }
        let modulo = num % parts; //this equals remainder and stays constant.
        for(let i = 1; i <= modulo; i++){
            isoArr[isoArr.length - i] = isoArr[isoArr.length - i] + 1;
        }
        return isoArr;
    }
  }

console.log(splitInteger(20, 3));