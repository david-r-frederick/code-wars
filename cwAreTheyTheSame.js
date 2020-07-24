//Are they the "same?"

//Link: https://www.codewars.com/kata/550498447451fbbd7600041c/javascript

function comp(array1, array2) {
    if (!array1 ||
        !array2 ||
        array1.length !== array2.length
    ) {
        return false;
    }
    const arr1Squared = array1.map(el => Math.pow(el, 2)).sort();
    array2 = array2.sort();
    if(arr1Squared.join('') !== array2.join('')){
        return false;
    }
    return true;
}

console.log(comp([], []));