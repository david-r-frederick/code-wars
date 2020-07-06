//Simple Fun #44: Three Split

// You have a long strip of paper with integers written on it in a single line from left to right. You wish to cut the paper into exactly three pieces such that each piece contains at least one integer and the sum of the integers in each piece is the same. You cannot cut through a number, i.e. each initial number will unambiguously belong to one of the pieces after cutting. How many ways can you do it?

function threeSplit(a) {
    const sum = a.reduce((a, b) => a + b);
    if (sum % 3 !== 0) {
        return 0;
    }
    const third = sum / 3;
    let ways = 0;
    let jStart = 2;
    for (let i = 1; i < a.length - 1; i++) {
        let firstSum = a.slice(0, i).reduce((a, b) =>  a + b);
        for (let j = jStart; j < a.length; j++) {
            if (firstSum !== third) {
                break;
            }
            let secondSum = a.slice(i, j).reduce((a, b) =>  a + b);
            if (secondSum !== third) {
                continue;
            }
            let thirdSum = a.slice(j).reduce((a, b) =>  a + b);
            if (thirdSum !== third) {
                continue;
            }
            if (firstSum === secondSum && secondSum === thirdSum) {
                ways++;
            }
        }
        jStart++;
    }
    return ways;
}

console.log(threeSplit([-1, 1, -1, 1, -1, 1, -1, 1]));
