//TV Remote (shift and space)
//Kata contains graphic. Read kata here: 
//https://www.codewars.com/kata/5b277e94b6989dd1d9000009/javascript


function tvRemote(word) {
    if (typeof word !== 'string') return;
    const originalLetter = 'a';
    let clickCount = 0;
    let capsIsOn = false;
    let previousRow;
    let previousIndex;
    let currentRow;
    let currentIndex;
    const possibleValues = {
        'a':[0, 0], 'b':[0, 1], 'c':[0, 2], 'd':[0, 3], 'e':[0, 4], '1':[0, 5], '2':[0, 6], '3':[0, 7],
        'f':[1, 0], 'g':[1, 1], 'h':[1, 2], 'i':[1, 3], 'j':[1, 4], '4':[1, 5], '5':[1, 6], '6':[1, 7],
        'k':[2, 0], 'l':[2, 1], 'm':[2, 2], 'n':[2, 3], 'o':[2, 4], '7':[2, 5], '8':[2, 6], '9':[2, 7],
        'p':[3, 0], 'q':[3, 1], 'r':[3, 2], 's':[3, 3], 't':[3, 4], '.':[3, 5], '@':[3, 6], '0':[3, 7],
        'u':[4, 0], 'v':[4, 1], 'w':[4, 2], 'x':[4, 3], 'y':[4, 4], 'z':[4, 5], '_':[4, 6], '/':[4, 7],
        'aA':[5, 0], 'SP':[5, 1]
    }
    const specialCharacters = ['1','2','3','4','5','6','7','8','9','0', '@', '_', '.', '/'];
    const shiftRow = 5;
    const shiftIndex = 0;
    let addRowAndIndexDiffs = function () {
        clickCount += Math.abs(previousRow - currentRow) + 1;
        clickCount += Math.abs(previousIndex - currentIndex);
    };
    for (let i = 0; i < word.length; i++) {
        const currentCharacter = word[i];
        const previousCharacter = word[i - 1] ? word[i - 1] : originalLetter;
        if (previousCharacter === ' ') {
            previousRow = possibleValues['SP'][0];
            previousIndex = possibleValues['SP'][1];
        } else {
            previousRow = possibleValues[previousCharacter.toLowerCase()][0];
            previousIndex = possibleValues[previousCharacter.toLowerCase()][1];
        }
        if (currentCharacter === ' ') {
            currentRow = possibleValues['SP'][0];
            currentIndex = possibleValues['SP'][1];
            addRowAndIndexDiffs();
            continue;
        } else {
            currentRow = possibleValues[currentCharacter.toLowerCase()][0];
            currentIndex = possibleValues[currentCharacter.toLowerCase()][1];
        }
        if (specialCharacters.includes(currentCharacter)
        ) { addRowAndIndexDiffs();
            continue;
        }
        if ((currentCharacter === currentCharacter.toUpperCase() &&
                !capsIsOn) ||
            (currentCharacter === currentCharacter.toLowerCase() && capsIsOn)
        ) {
            clickCount += Math.abs(previousIndex - shiftIndex) + 1;
            clickCount += Math.abs(previousRow - shiftRow);
            previousRow = shiftRow;
            previousIndex = shiftIndex;
        }
        capsIsOn = currentCharacter === currentCharacter.toUpperCase() && !capsIsOn ? true : 
        currentCharacter === currentCharacter.toLowerCase() && capsIsOn ? false : capsIsOn;
        addRowAndIndexDiffs();
    }
    return clickCount;
}