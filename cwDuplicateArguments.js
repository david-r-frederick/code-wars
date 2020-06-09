//Duplicate Arguments
// Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.
// The array values passed in will only be strings or numbers. The only valid return values are true and false.
// Examples:
// solution(1, 2, 3)             -->  false
// solution(1, 2, 3, 2)          -->  true
// solution('1', '2', '3', '2')  -->  true

//Solution 1 (for Object practice)
// function solution() {
//     let bool = false;
//     this.args = [...arguments];
//     this.scan = () => {
//         this.args.forEach((letter, ind) => {
//             const excludeCurrent = this.args.map((value, index) => {
//                 if (index !== ind) {
//                     return value;
//                 }
//             });
//             if (excludeCurrent.includes(letter)) {
//                 bool = true;
//             }
//         });
//     };
//     this.scan();
//     return bool;
// }

//Solution 2
function solution() {
    for(const element of [...arguments]){
        if([...arguments].filter(el => el === element).length > 1){
            return true;
        }
    } 
    return false;
}

console.log(solution(1,2,3,6,5,6));
