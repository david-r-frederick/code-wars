// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[0] && arr[i] !== arr[i+1] && arr[i] !== arr[i + 2] && arr[i+2] !== undefined)
            {return arr[0];}
        else if (arr[i] === arr[i + 1]){
        } else {
            return arr[i + 1];
        }
    };
}

//Sample input
const randomArr = [ 1, 1, 1, 4 ];

//should return one number
const test = findUniq(randomArr);
console.log(test);