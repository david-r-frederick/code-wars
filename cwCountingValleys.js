//Counting Valleys
// You need count how many valleys you will pass.
// Start is always from zero level.
// Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.
// One passed valley is equal one entry and one exit of a valley.

// s='FUFFDDFDUDFUFUF'
// U=UP
// F=FORWARD
// D=DOWN

// To represent string above
// (level 1)  __
// (level 0)_/  \         _(exit we are again on level 0)
// (entry-1)     \_     _/
// (level-2)       \/\_/
// So here we passed one valley

function countingValleys(s) {
    let currentLevel = 0;
    let newLevel = 0;
    let valleys = 0;
    s = s.split('').forEach(letter => {
        if(letter === 'D'){
            newLevel = currentLevel - 1;
        } else if (letter === 'U'){
            newLevel = currentLevel + 1;
        }
        if(currentLevel < 0 && newLevel === 0){
            valleys++;
        }
        currentLevel = newLevel;
    });
    return valleys;
}

console.log(countingValleys('UFFDDFDUDFUFU'));
