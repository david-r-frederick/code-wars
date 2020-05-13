//Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let tempArr = [];
    let splitter = str.split(' ');
    for (let i = 0; i < splitter.length; i++) {
        tempArr.push(splitter[i].split(''));
    }
    tempArr.forEach((letter) => {
        letter.reverse();
    });
    tempArr = tempArr.join(' ');
    tempArr = tempArr.split(',').join('');
    return tempArr;
}