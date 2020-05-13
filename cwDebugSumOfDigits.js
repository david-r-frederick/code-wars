// Debug Sum of Digits of a Number

// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 15

function getSumOfDigits(integer) {
    var sum = 0;
    var digits =  integer.toString();
    for(var i = 0; i < digits.length; i++) {
      sum += parseInt(digits[i]);
    }
    return sum;
  }