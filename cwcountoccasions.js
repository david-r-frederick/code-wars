function nbDig(n, d) {
    let arr = [];
    for(let i = 0; i <= n; i++){
        arr.push(n - i);
    }
    let counter = 0;
    let sqrdArr = arr.map(num => num * num).join(''); // equals 169410
    for(let i = 0; i < sqrdArr.length; i++){
        if(parseInt(sqrdArr[i]) === d){
            counter++;
        }
    }
    return counter;
}

function nbDigTwo(n, d){
    let counter = 0;
    d = d.toString();
    for(let i = 0; i <= n; i++){
        let temp = i * i;
        temp = temp.toString();
        for(let j = 0; j < temp.length; j++){
        if(temp[j] === d){
            counter++;
        }
    }
}
    return counter;
}

nbDigTwo(9, 1); //answer is 2