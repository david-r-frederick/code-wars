// //TV Remote

// Background
// My TV remote control has arrow buttons and an OK button.
// I can use these to move a "cursor" on a logical screen keyboard to type "words"...
// The screen "keyboard" layout looks like this
// a	b	c	d	e	1	2	3
// f	g	h	i	j	4	5	6
// k	l	m	n	o	7	8	9
// p	q	r	s	t	.	@	0
// u	v	w	x	y	z	_	/

// Kata task
// How many button presses on my remote are required to type a given word?

// Notes
// The cursor always starts on the letter a (top left)
// Remember to also press OK to "accept" each character.
// Take a direct route from one character to the next
// The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)
// A "word" (for the purpose of this Kata) is any sequence of characters available on my virtual "keyboard"

// Example
// word = codewars
// c => a-b-c-OK = 3
// o => c-d-e-j-o-OK = 5
// d => o-j-e-d-OK = 4
// e => d-e-OK = 2
// w => e-j-o-t-y-x-w-OK = 7
// a => w-r-m-h-c-b-a-OK = 7
// r => a-f-k-p-q-r-OK = 6
// s => r-s-OK = 2
// Answer = 3 + 5 + 4 + 2 + 7 + 7 + 6 + 2 = 36


//Solution 1
// function tvRemote(word) {
//     let previousLetter = 'a';
//     let clickCount = 0;
//     const possibleValues = [
//         ['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
//         ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
//         ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
//         ['p', 'q', 'r', 's', 't', '.', '@', '0'],
//         ['u', 'v', 'w', 'x', 'y', 'z', '_', '/'],
//     ];
//     for(let i = 0; i < word.length; i++){
//         const nextLetter = word[i];
//         let currentRow = 0;
//         let nextRow = 0;
//         for(let j = 0; j < possibleValues.length; j++){
//             if(possibleValues[j].includes(previousLetter)){
//                 currentRow = j;}
//             if(possibleValues[j].includes(nextLetter)){
//                 nextRow = j;}
//             if(currentRow && nextRow){
//                 break;}
//         }
//         const currentIndex = possibleValues[currentRow].indexOf(previousLetter);
//         const nextIndex = possibleValues[nextRow].indexOf(nextLetter);
//         clickCount += Math.abs(currentIndex - nextIndex) + 1;
//         if(currentRow !== nextRow){
//             clickCount += Math.abs(currentRow - nextRow);
//         }
//         previousLetter = nextLetter;
//     }
//     return clickCount;
// }

//Solution 2
function tvRemote(word) {
    let previousLetter = 'a';
    let clickCount = 0;
    const possibleValues = {
        'a':[0, 0], 'b':[0, 1], 'c':[0, 2], 'd':[0, 3], 'e':[0, 4], '1':[0, 5], '2':[0, 6], '3':[0, 7],
        'f':[1, 0], 'g':[1, 1], 'h':[1, 2], 'i':[1, 3], 'j':[1, 4], '4':[1, 5], '5':[1, 6], '6':[1, 7],
        'k':[2, 0], 'l':[2, 1], 'm':[2, 2], 'n':[2, 3], 'o':[2, 4], '7':[2, 5], '8':[2, 6], '9':[2, 7],
        'p':[3, 0], 'q':[3, 1], 'r':[3, 2], 's':[3, 3], 't':[3, 4], '.':[3, 5], '@':[3, 6], '0':[3, 7],
        'u':[4, 0], 'v':[4, 1], 'w':[4, 2], 'x':[4, 3], 'y':[4, 4], 'z':[4, 5], '_':[4, 6], '/':[4, 7]
    }
    for(let i = 0; i < word.length; i++){
        const currentIndex = possibleValues[previousLetter][1];
        const nextIndex = possibleValues[word[i]][1];
        const currentRow = possibleValues[previousLetter][0];
        const nextRow = possibleValues[word[i]][0];
        clickCount += Math.abs(currentRow - nextRow);
        clickCount += Math.abs(currentIndex - nextIndex);
        clickCount++;
        previousLetter = word[i];
    }
    return clickCount;
}

console.log(tvRemote('your'));
