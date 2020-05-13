function calculateString(st) {
    let arrFromSt = Array.from(st);
    let operator;
    let leftNumsArr = [];
    let rightNumsArr = [];
    for (let i = 0; i < st.length; i++) {
        switch (arrFromSt[i]) {
            case '+':
                operator = '+';
                break;
            case '-':
                operator = '-';
                break;
            case '*':
                operator = '*';
                break;
            case '/':
                operator = '/';
                break;
        }
        if (!operator &&
            (parseInt(arrFromSt[i]) || arrFromSt[i] === '0' || arrFromSt[i] === '.')
        ) {
            leftNumsArr.push(arrFromSt[i]);
        } else if (
            operator &&
            (parseInt(arrFromSt[i]) || arrFromSt[i] === '0' || arrFromSt[i] === '.')
        ) {
            rightNumsArr.push(arrFromSt[i]);
        }
    }
    let leftNumber = parseFloat(leftNumsArr.join(''));
    let rightNumber = parseFloat(rightNumsArr.join(''));
    switch (operator) {
        case '+':
            return Math.round(leftNumber + rightNumber).toString();
        case '-':
            return Math.round(leftNumber - rightNumber).toString();
        case '*':
            return Math.round(leftNumber * rightNumber).toString();
        case '/':
            return Math.round(leftNumber / rightNumber).toString();
    }
}

console.log(calculateString('fsdfsd234.4554s4234df+sf234442'));