//How Many Urinals Are Free?
//Link: https://www.codewars.com/kata/5e2733f0e7432a000fb5ecc4

function getFreeUrinals(urinals) {
    if (urinals.length === 1) {
        return Number(urinals[0]) === 1 ? 0 : 1;
    } else if (urinals.includes('11')) {
        return -1;
    }
    const copy = ['0'].concat([...urinals.split('')]).concat('0');
    for (let i = 1; i < copy.length - 1; i++) {
        if (copy[i] === '0' && copy[i - 1] === '0' && copy[i + 1] === '0') {
            copy[i] = '1';
        }
    }
    return copy.reduce((x, y) => +x + +y) - urinals.split('').reduce((x, y) => +x + +y);
}

console.log(getFreeUrinals('000'));
