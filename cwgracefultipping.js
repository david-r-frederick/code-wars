//Graceful Tipping
// Adding tip to a restaurant bill in a graceful way can be tricky, thats why you need make a function for it.
// The function will receive the restaurant bill (always a positive number) as an argument. You need to 1) add at least 15% in tip, 2) round that number up to an elegant value and 3) return it.
// What is an elegant number? It depends on the magnitude of the number to be rounded. Numbers below 10 should simply be rounded to whole numbers. Numbers 10 and above should be rounded like this:
// 10 - 99.99... ---> Round to number divisible by 5
// 100 - 999.99... ---> Round to number divisible by 50
// 1000 - 9999.99... ---> Round to number divisible by 500
// And so on...

// Good luck!
// Examples
//  1  -->    2
//  7  -->    9
// 12  -->   15
// 86  -->  100

// Condition 1: at least a 15% increase in the tip
// Condition 2: round number up to an elegant value
// Condition 3: return the value

function gracefulTipping(bill) {
    let referenceArr = [5];
    let plusPercent = (bill * 1.15).toFixed(2);
    let tipFloat = parseFloat(plusPercent);
    if (tipFloat < 10) {
        return Math.ceil(tipFloat);
    }
    for (let j = 0; j < plusPercent.toString().length - 5; j++) {
        referenceArr.push(0);
    }
    let reference = parseInt(referenceArr.join(''));
    for (let i = reference; i < tipFloat + reference; i += reference) {
        if (i - tipFloat > 0) {
            return tipFloat + (i - tipFloat);
        }
    }
}