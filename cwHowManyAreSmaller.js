//How many are smaller than me?
// Write

// function smaller(arr)
// that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

// For example:

// smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
// smaller([1, 2, 0]) === [1, 1, 0]

function smaller(nums) {
    let arr = [];
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] > nums[j]){
                sum+=1;
            }
        }
        arr.push(sum);
        sum = 0;
    }
    return arr;
}