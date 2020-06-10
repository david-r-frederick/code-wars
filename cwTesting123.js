//Testing 1-2-3
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

function number (array){
    const objOfValues = {};
    for(let i = 1; i <= array.length; i++){
        returnableObject[i] = array[i - 1];
    }
    return Object.entries(objOfValues).map(element => {
        return element = `${element[0]}: ${element[1]}`
    });    
}

console.log(number(["a", "b", "c"]));
