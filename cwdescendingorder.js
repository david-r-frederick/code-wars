//Codewars "Descending Order" Kata

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