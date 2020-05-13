//Graceful Tipping
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