//Where my Anagrams At?
//https://www.codewars.com/kata/523a86aa4230ebb5420001e1/javascript

function anagrams(word, words) {
    return words.filter(el => {
        return el.split('').sort().join('') === word.split('').sort().join('');
    });
}
