function consecutiveDucks(num) {
    let arr= [];
    for(let i = 1; i <= num / 2; i++){
        arr.push(i);
    }
    return arr;
}

console.log(consecutiveDucks(6));