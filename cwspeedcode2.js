//SpeedCode #2 - Array Madness

function arrayMadness(a, b) {
    let firstArrCt = 0;
    let secondArrCt = 0;
    
    a.forEach((num) => {
        firstArrCt += num * num;
    });
    b.forEach((num) => {
        secondArrCt += num * num * num;
    });
    
    firstArrCt > secondArrCt ? true : false;
}

console.log(arrayMadness([5, 6, 7], [4, 5, 6]));
