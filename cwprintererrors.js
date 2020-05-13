function printerError(s) {
    let arr = [];
    let denominator = s.length;
    for(let i = 0; i < s.length; i++){
        if(s[i] < "n"){
            {
                arr.push(s[i]);
            }
        }
    }
    let numerator = denominator - arr.length;
    return numerator.toString() + '/' + denominator.toString();
}

console.log(printerError('aabbcmx'));
