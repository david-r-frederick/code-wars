//Integers:Recreation One
//m = low end
//n = high end

function listSquared(m, n) {
    let arrOfEverything = [];
    //generates an array of all integers between m and n
    while (m <= n) {
        arrOfEverything.push(m);
        m++;
    }
    return arrOfEverything.map(doAllTheWork).filter(arr => Math.sqrt(arr[1]) % 1 === 0);

}

console.log(listSquared(1, 250));

function doAllTheWork(num){
    let accumulator = num * num;
    for(let i = 1; i < num; i++){
        if(num % i === 0){
            accumulator += i * i;
        }
    }
    return [num, accumulator];
}
