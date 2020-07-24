//No Order of Operations
//Given an equation with a random amount of spaces greater than or equal to zero between each number and operation, return the result without order of operations. Note that if two numbers are spaces apart, act as if they were one number: 1 3 = 13. However, if given something % 0 or something / 0, return None/null.

function noOrder(s) {
    if (!s || s === '') {
        return null;
    }
    s = s.replace(/\s/g, '').split('');
    let holder = [];
    const segment = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/\d/)) {
            segment.push(s[i]);
            if (i === s.length - 1) {
                holder.push(+segment.join(''));
            }
        } else {
            holder.push(+segment.join(''));
            holder.push(s[i]);
            segment.splice(0);
        }
    }
    while (holder.length > 1) {
        holder.unshift(compute(...holder.splice(0, 3)));
    }
    const invalids = ['NaN', 'Infinity', '-Infinity'];
    if (invalids.includes(holder[0].toString())) {
        return null;
    }
    return holder[0];
}

function compute(num1, sign, num2) {
    switch (sign) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return Math.floor(num1 / num2);
        case '^':
            return Math.pow(num1, num2);
        case '%':
            return num1 % num2;
    }
}
