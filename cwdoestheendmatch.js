// function solution(str, ending) {
//     let count = str.length - 1;
//     if (ending.length > str.length) {
//         return false;
//     } else if (ending === '') {
//         return true;
//     } else {
//         for (let i = ending.length - 1; i >= 0; i--) {
//             if (ending[i] === str[count]) {
//                 count--;
//                 if (i === 0) {
//                     return true;
//                 }
//             } else {
//                 return false;
//             }
//         }
//     }
// }

// console.log(solution('sumo', 'omo'));

function solution (string, ending){
    string = Array.from(string).reverse().join('');
    ending = Array.from(ending).reverse().join('');
    if(string.startsWith(ending)){return true} else {return false};
}

console.log(solution('foo', 'oo'));
