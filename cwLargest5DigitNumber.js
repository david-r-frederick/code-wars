// Largest 5 digit number in a series

// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net

function solution(digits) {
    let willReturn = digits[0] + digits[1] + digits[2] + digits[3] + digits[4];
    willReturn = parseInt(willReturn);

    for(let i = 0; i < digits.length - 4; i++){
        let compareNum = digits[i + 1] + digits[i + 2] + digits[i + 3] + digits[i + 4] + digits[i + 5];
        let compareNumInt = parseInt(compareNum);

        if(compareNumInt > willReturn){
            willReturn = compareNumInt;
        }
    }
    return willReturn;
}