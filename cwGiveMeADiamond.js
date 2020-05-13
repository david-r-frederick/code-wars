//Give me a Diamond
// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Example
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

function diamond(n){
    if(n % 2 === 0 || n <= 0){
        return null;
    }

    let arr = [];

    for(let i = 1; i <= n; i += 2){
        arr.push(i.toString());
    }

    for (let j = n - 2; j >= 0; j -= 2){
        arr.push(j.toString());
    }

    let spacer = Math.floor(n/2);
    let diam = '';

    for(let k = 0; k < n/2; k ++){
        diam = diam + ' '.repeat([spacer]) + '*'.repeat(arr[k]) + '\n'; 
        spacer--;
    }

    spacer = 1;

    for(let l = Math.ceil(n/2); l < n; l++){
        diam = diam + ' '.repeat([spacer]) + '*'.repeat(arr[l]) + '\n'; 
        spacer++;
    } 
    
    return diam;
}