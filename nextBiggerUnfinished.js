// //Next bigger number with the same digits
// /*
// Pseudo Code
// 1. Extract the first digit
// 2. Place that digit everywhere it can be in the given string, then push the new value
// 3. Repeat the process but with more digits (1, 2, 3...)
// */
// function nextBigger(n) {
//     const possibleValues = [];
//     n = Array.from(String(n), Number);
//     const length = n.length;
//     const lengthCopy = length;
//     for(let i = 0; i < lengthCopy; i++){
//         for (let j = 1; j < lengthCopy; j++) {
//             const currentSection = n.splice(i, j);
//             let straight = parseInt(currentSection.join(''));
//             straight = Array.from(String(straight), Number);
//             let straightCopy = Array.from(straight);
//             let reversed = straightCopy.reverse();
//             //will put currentSection into various places and push it to possible values
//             //will also put currentSection reversed
//             for(let k = 0; k < lengthCopy; k++){
//                 n.splice(k, 0, ...straight);//push in current section
//                 const straightWithSection = parseInt(n.join(''));
//                 const reversedWithSection = parseInt(straightWithSection.toString().split('').reverse().join(''));
//                 possibleValues.push(straightWithSection);//push value to possible values
//                 possibleValues.push(reversedWithSection);
//                 n.splice(k, j);
//                 n.splice(k, 0, ...reversed);
//                 const straightWithReversedSection = parseInt(n.join(''));
//                 const reversedWithReversedSection = parseInt(straightWithReversedSection.toString().split('').reverse().join(''));
//                 possibleValues.push(straightWithReversedSection);
//                 possibleValues.push(reversedWithReversedSection);
//                 n.splice(k, j);
//                 if(k === lengthCopy - 1){
//                     n = currentSection.concat(n);
//                 }
//                 console.log(currentSection, n, k);
//                 // console.log(n, straightWithReversedSection, reversedWithReversedSection, k);
//             }
//         }
//     }
//     const noLittles = possibleValues
//         .filter((value) => value >= parseInt(n.join('')))
//         .sort((a, b) => a - b);
//     //compares original value to second highest value, if different, returns second
//     if (noLittles[1] > noLittles[0]) {
//         return noLittles[1];
//     }
//     return -1;
// }

function nextBigger(n) {
    const possibleValues = [];
    n = Array.from(String(n), Number);
    let generatePossibleNumbers = function (){
        for(let a = 1; a < n.length; a++){
            for (let i = 0; i < n.length; i++) {
                let p = Array.from(n); //copy of n array
                const currentNumber = p.splice(i, a);
                for (let j = 0; j < n.length; j++) {
                    p.splice(j, 0, currentNumber); //put in number
                    const straight = parseInt(p.join(''));
                    const reversed = parseInt(straight.toString().split('').reverse().join(''));
                    if(!possibleValues.includes(straight)){
                        possibleValues.push(straight);
                    }
                    if(!possibleValues.includes(reversed)){
                        possibleValues.push(reversed);
                    }
                    p.splice(j, a); //remove number
                }
            }
        }
    }
    for (let k = 0; k < n.length; k++) {
        n[n.length] = n[0];
        n.shift(); //shift removes the first element
        if(n[0] === 0){
            continue;
        } else {
            generatePossibleNumbers();
        }
    }
    const noLittlesNoDupes = possibleValues
    .filter((value) => value >= parseInt(n.join('')))
    .sort((a, b) => a - b);
    console.log(noLittlesNoDupes);
    //compares original value to second highest value, if different, returns second
    if (noLittlesNoDupes[1] > noLittlesNoDupes[0]) {
        return noLittlesNoDupes[1];
    }
    return -1;
}

console.log(nextBigger(989788743));
                       989834778