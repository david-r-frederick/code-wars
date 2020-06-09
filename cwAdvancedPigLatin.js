//Advanced Pig Latin
// Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay".
// "hello" => "ellohay"
// "creating" => "eatingcray"
// If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.
// "algorithm" => "algorithmway"
// This problem is different from other variations in that it expects casing to remain the same so:
// "Hello World" => "Ellohay Orldway"
// as well as punctuation.
// "Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
// Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.

function translate(sentence) {
    if (!sentence) {
        return;
    }
    let firstSpecialIndex;
    let firstVowelIndex;
    const fullSentenceSplit = sentence.split(' ');
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < fullSentenceSplit.length; i++) {
        fullSentenceSplit[i] = fullSentenceSplit[i].split('');
        const firstLetterIsInCaps = fullSentenceSplit[i][0] === fullSentenceSplit[i][0].toUpperCase() ? true : false;
        const specialCharacters = fullSentenceSplit[i].filter(
            (element) =>
                element.charCodeAt() < 65 || element.charCodeAt() > 90 && element.charCodeAt() < 97 || element.charCodeAt() > 122
        );
        if(fullSentenceSplit[i].indexOf(specialCharacters[0]) !== -1){
            firstSpecialIndex = fullSentenceSplit[i].indexOf(specialCharacters[0]);
            fullSentenceSplit[i].splice(firstSpecialIndex);
        }

        if (vowels.includes(fullSentenceSplit[i][0])) {
            fullSentenceSplit[i] = fullSentenceSplit[i].join('') + 'way' + specialCharacters.join('');
        } else {
            let foundFirstVowel = false;
            fullSentenceSplit[i].forEach((letter, index) => {
                if (vowels.includes(letter) && !foundFirstVowel) {
                    foundFirstVowel = true;
                    firstVowelIndex = index;
                }
            });
            const frontConsonants = fullSentenceSplit[i].slice(0, firstVowelIndex);
            frontConsonants[0] = frontConsonants[0].toLowerCase();
            fullSentenceSplit[i].splice(0, frontConsonants.length);
            if(fullSentenceSplit[i][0].toUpperCase() && firstLetterIsInCaps){
                fullSentenceSplit[i][0] = fullSentenceSplit[i][0].toUpperCase();
            }
            fullSentenceSplit[i] = 
                fullSentenceSplit[i].join('') + frontConsonants.join('') + 'ay' + specialCharacters.join('');
        }
    }
    return fullSentenceSplit.join(' ');
}

console.log(translate('Hello everyone. Welcome to the code kata.'));
