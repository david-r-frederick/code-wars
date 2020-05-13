//+1 Array

function upArray(arr) {
    let mutArr = arr; //the original array

    //checks to see if array is empty or last number is negative
    if (!(arr.length) || mutArr[mutArr.length - 1] < 0) {return null}; 

    //adds on to the last number in the array
    mutArr[mutArr.length - 1] += 1; 

    //"carries the one" if necessary
    for (let h = 1; h < mutArr.length; h++) {
        if (mutArr[mutArr.length - h] === 10) {
            mutArr[mutArr.length - h] = 0;
            mutArr[mutArr.length - h - 1] += 1;
        }
    }

    //adds a 1 to the front of the array if the number at index 0 was originally a 9
    if (mutArr[0] === 10) {
        mutArr[0] = 0;
        mutArr.unshift(1);
    }

    //returns null if any number is negative or a double digit, otherwise returns the array
    for (let i = 1; i <= mutArr.length; i++) {
        if (mutArr[mutArr.length - i] < 0) {
            return null;
        } else if (mutArr[mutArr.length - i] > 9){
            return null;
        } else if (i === mutArr.length && mutArr[mutArr.length - i] >= 0 && mutArr[mutArr.length - i] <= 9){
            return mutArr;
        }
    }
}

console.log(upArray([ 7, 8, 9, 5, 2]));
