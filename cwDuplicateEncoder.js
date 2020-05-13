//Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    const wordSplitted = word.split('')
const repeated = wordSplitted
 .map((char, index) => {
   const wordArr = word.split('')
   wordArr.splice(index, 1)
   const repeats = wordArr.reduce(
     (a, b) => (b.toLowerCase() === char.toLowerCase() ? a + 1 : a),
     0
   )
   return {
     char,
     repeats,
   }
 })
 .map(({ repeats }) => (repeats >= 1 ? ')' : '('))
 .join('')
return repeated
}