function incrementString (strng) {
    strng = strng.split('');
    let splitPoint = strng.includes('0') ? strng.indexOf('0') : strng.indexOf();
    // let letters = 

    return splitPoint;
}

console.log(incrementString('fooo0543'));