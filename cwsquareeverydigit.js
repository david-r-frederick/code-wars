function squareDigits(num){
    let arr = [];
    num = num.toString().split('');
    
    num.forEach(num => {
        let numVersion = parseInt(num);
        arr.push(numVersion * numVersion);
    })
    return parseInt(arr.join(''));
}

