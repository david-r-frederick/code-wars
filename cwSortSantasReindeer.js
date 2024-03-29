//Sort Santa's Reindeer
// Happy Holidays fellow Code Warriors!
// Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!

// Sort Santa's Reindeer
// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

// Notes:
// It's guaranteed that each string is composed of two words
// In case of two identical last names, keep the original order

sortReindeer = reindeerNames => {
    return reindeerNames
        .map(el => el.split(' '))
        .sort(compare)
        .map(r => r.join(' '));
}

function compare(a, b) {
    if (a[1] > b[1]) {
        return 1;
    }
    if (b[1] > a[1]) {
        return -1;
    }
    return 0;
}

console.log(
    sortReindeer([
        'Dasher Tonoyan',
        'Dancer Moore',
        'Prancer Chua',
        'Vixen Hall',
        'Comet Karavani',
        'Cupid Foroutan',
        'Donder Jonker',
        'Blitzen Claus',
    ])
);
