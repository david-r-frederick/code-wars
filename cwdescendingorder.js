//Descending Order

// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

let n = 21445;

descendingOrder = num => {
    //converts into an array of strings eg ['2', '1', '4', '4', '5']
    let numArr = Array.from(num.toString()).map(Number);

    //sorts the array to descending order e.g. ['5', '4', '4', '2', '1']
    (numArr).sort((a,b) => b - a);

    //joins the elements of the array into one string, then turns the string into a number, stored as a variable
    let numArrAsNumber = Number(numArr.join(''));
    return numArrAsNumber;

}

console.log(descendingOrder(n));