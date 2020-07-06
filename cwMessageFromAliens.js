//Message from Aliens
//Aliens send messages to our planet, but they use a very strange language. Try to decode the messages!
//https://www.codewars.com/kata/598980a41e55117d93000015

function decode(m) {
    const code = {
        '\\/': 'a',
        '3': 'b',
        '(': 'c',
        ')|': 'd',
        '-[': 'e',
        '=/': 'f',
        ',_(': 'g',
        '|-|': 'h',
        '|': 'i',
        'T_': 'j',
        '</': 'k',
        '_|': 'l',
        '|/\\|': 'm',
        '|\\|': 'n',
        ')(': 'o',
        '^|': 'p',
        '_)(': 'q',
        '?/': 'r',
        '~\\_': 's',
        '~|~': 't',
        '|_|': 'u',
        '/\\': 'v',
        '/\\/\\': 'w',
        '<>': 'x',
        '/`': 'y',
        '_/~': 'z',
        '__': ' ',
    };
    m = m
        .replace(/[{}\.\+'\]]/g, '1')
        .split('')
        .reverse()
        .join('')
        .split('1');
    for (let i = 0; i < m.length; i++) {
        m[i] = code[m[i]];
    }
    return m.join('');
}