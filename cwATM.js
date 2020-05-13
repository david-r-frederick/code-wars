//ATM
// There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.
// You are given money in nominal value of n with 1<=n<=1500.
// Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.
// Good Luck!!!

function solve(n) {
    let test = n.toString().split('');
    if(test[test.length - 1] !== '0'){
        return -1;
    }
    let count = 0;
    let num = n;

    if(num >= 500){
        let t = Math.floor(num/500);
        count += t;
        num -= (500 * t);
    }
    if(num >= 200){
        let t = Math.floor(num/200);
        count += t;
        num -= (200 * t);
    }
    if(num >= 100){
        let t = Math.floor(num/100);
        count += t;
        num -= (100 * t);
    }
    if(num >= 50){
        let t = Math.floor(num/50);
        count += t;
        num -= (50 * t);
    }
    if(num >= 20){
        let t = Math.floor(num/20);
        count += t;
        num -= (20 * t);
    }
    if(num >= 10){
        let t = Math.floor(num/10);
        count += t;
        num -= (10 * t);
    }
    return count;
}