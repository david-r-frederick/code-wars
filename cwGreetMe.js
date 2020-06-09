//Greet Me
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
// Example:
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

function greet(name) {
    if(!name){return};
    const nameInLowerCase = name.split('').map(letter => {return letter.toLowerCase()});
    const firstLetterInCaps = name[0].toUpperCase();
    nameInLowerCase[0] = firstLetterInCaps;
    name = nameInLowerCase.join('');
    return `Hello ${name}!`;
};

console.log(greet('DaviD'));