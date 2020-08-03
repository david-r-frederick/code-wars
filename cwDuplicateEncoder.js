//Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    if(!word || typeof word !== 'string'){
        return;
    }
    const wordToLowerCase = word.toLowerCase();
    const lowercaseArray = wordToLowerCase.split('');
    const lettersWithCounts = {};
    for(let i = 0; i < lowercaseArray.length; i++){
        if(lettersWithCounts[lowercaseArray[i]]){
            lettersWithCounts[lowercaseArray[i]] += 1;
        } else {
            lettersWithCounts[lowercaseArray[i]] = 1;
        }
    }
    const paranthesesSubstituded = lowercaseArray.map(el => lettersWithCounts[el] > 1 ? ')' : '(').join('');
    return paranthesesSubstituded;
}