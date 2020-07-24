//Simple Prime Streaming

let primeValues = [2];
for (let i = 3; i < 42000;i += 2) {
    primeValues.push(i);
}
let placeholder = 2;
for(let i = 3; i < 200; i++){
    for(let j = placeholder; j < primeValues.length; j++){
        if(primeValues[j] % i === 0){
            primeValues.splice(j, 1);
        }
    }
    placeholder++;
}
primeValues = primeValues.join('');
solve = (a, b) => primeValues.substring(a, a + b);