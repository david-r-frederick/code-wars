//Largest 5 digit number in a series

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

solution('87654321');


