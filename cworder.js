const sampleString = "is2 Thi1s T4est 3a";

function order(words){
    const splitUp = words.split(' ');
    // const splitUp = ['is2', 'Thi1s', 'T4est', '3a']

    if (words.length === 0){
        return ''
    } else {
        const newArr = [];

        for(let i = 0; i < splitUp.length; i++){
                    
            for(let j = 0; j < splitUp[i].length; j++){
                
                const whereAreWe = splitUp[i][j];
                const whereAreWeAsANumber = parseInt(whereAreWe);
                if (Number.isNaN(whereAreWeAsANumber) === false) {
                    let currentSegment = whereAreWeAsANumber - 1;
                    newArr[currentSegment] = splitUp[i];
                }
            }
        }
        const returnThis = newArr.join(' ');
        return returnThis;
    }    
};

const test = order(sampleString);
console.log(test);