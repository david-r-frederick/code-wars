//input
var randomArr = [ 1, 1, 1, 4 ];


//magic
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

//should return one number
const test = findUniq(randomArr);
console.log(test);

//if (arr[i] === arr[i+1])