//Find the odd int

// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
    //this for loop doesn't start over until the inner for loop has run several times
    for (let num of arr) {
      let count = 0;
      
      //this code runs a bunch of times for each single number
      for (let n of arr) {
      if(n === num) {count++};
      }
    // this means if the number isn't divisible by 2, return whatever that number is
    if (count % 2 !== 0) {return num};
    }
  };