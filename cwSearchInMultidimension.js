//Search in Multidimensional Array
// Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

// Example:
// locate(['a','b',['c','d',['e']]],'e'); // should return true
// locate(['a','b',['c','d',['e']]],'a'); // should return true
// locate(['a','b',['c','d',['e']]],'f'); // should return false

function locate(arr,value){
    value = value.toString();
    return leveler(arr).includes(value) ? true : false;
}

function leveler(arr){
    let valuesArr = [];
    for(const element of arr){
        if(typeof element !== 'object'){
            valuesArr.push(element.toString());
        } else {
            leveler(element).forEach(el => {
                valuesArr.push(el.toString());
            });
        }
    }
    return valuesArr;
}