//Covered Pawns
// Given a list of white pawns on a chessboard (any number of them, meaning from 0 to 64 and with the possibility to be positioned everywhere), determine how many of them have their backs covered by another. Pawns attacking upwards since we have only white ones.
// Please remember that a pawn attack(and defend as well) only the 2 square on the sides in front of him. https://en.wikipedia.org/wiki/Pawn_(chess)#/media/File:Pawn_(chess)_movements.gif

function coveredPawns(pawns){
    if(!pawns || pawns.length === 0){return;}
    const segmentedPawnsArray = pawns.map(element => [element[0], element[1]]);
    let count = 0;
    segmentedPawnsArray.forEach((element, index) => {
        const currentUnicode = element[0].charCodeAt(0);
        const currentNumber = parseInt(element[1]);
        for(let i = 0; i < segmentedPawnsArray.length; i++){
            const compareUnicode = segmentedPawnsArray[i][0].charCodeAt(0);
            const compareNumber = parseInt(segmentedPawnsArray[i][1]);
            if(compareUnicode === currentUnicode - 1 || compareUnicode === currentUnicode + 1){
                if(compareNumber === (currentNumber - 1)){
                    count++;
                    break;
                }
            }
        }
    });
    return count;
}

console.log(coveredPawns(['f7', 'e6', 'g6', 'f5', 'a1']));