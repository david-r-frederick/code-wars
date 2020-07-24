//Persistent Bugger

//////Non-Recursion Solution
// let persistence = function(num) {
//     if(num.toString().length === 1){
//         return 0;
//     }
//     let count = 0;
//     for (let i = 0; i < 10; i++){
//         num = condense(num);
//         if(num.toString().length === 1){
//             count++;
//             return count;
//         } else {
//             count++;
//         }
//     }
// };

// function condense (num){
//     return num.toString().split('').reduce((x, y) => x * y, 1);
// }


//////Recursive Solution
let persistence = function(num) {
    if(num.toString().length === 1){
        return 0;
    } else {
        return persistenceHelper(num);
    }
};

function persistenceHelper (num){
    num = num.toString().split('').reduce((x, y) => x * y, 1);
    if(num.toString().length === 1){
        return 1;
    }
    return 1 + persistenceHelper(num);
}