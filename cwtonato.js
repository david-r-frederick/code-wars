function to_nato(words) {
    let arr = [];
    let string = words.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case 'a':
                arr.push('Alpha');
                arr.push(' ');
                break;
            case 'b':
                arr.push('Bravo');
                arr.push(' ');
                break;
            case 'c':
                arr.push('Charlie');
                arr.push(' ');
                break;
            case 'd':
                arr.push('Delta');
                arr.push(' ');
                break;
            case 'e':
                arr.push('Echo');
                arr.push(' ');
                break;
            case 'f':
                arr.push('Foxtrot');
                arr.push(' ');
                break;
            case 'g':
                arr.push('Golf');
                arr.push(' ');
                break;
            case 'h':
                arr.push('Hotel');
                arr.push(' ');
                break;
            case 'i':
                arr.push('India');
                arr.push(' ');
                break;
            case 'j':
                arr.push('Juliett');
                arr.push(' ');
                break;
            case 'k':
                arr.push('Kilo');
                arr.push(' ');
                break;
            case 'l':
                arr.push('Lima');
                arr.push(' ');
                break;
            case 'm':
                arr.push('Mike');
                arr.push(' ');
                break;
            case 'n':
                arr.push('November');
                arr.push(' ');
                break;
            case 'o':
                arr.push('Oscar');
                arr.push(' ');
                break;
            case 'p':
                arr.push('Papa');
                arr.push(' ');
                break;
            case 'q':
                arr.push('Quebec');
                arr.push(' ');
                break;
            case 'r':
                arr.push('Romeo');
                arr.push(' ');
                break;
            case 's':
                arr.push('Sierra');
                arr.push(' ');
                break;
            case 't':
                arr.push('Tango');
                arr.push(' ');
                break;
            case 'u':
                arr.push('Uniform');
                arr.push(' ');
                break;
            case 'v':
                arr.push('Victor');
                arr.push(' ');
                break;
            case 'w':
                arr.push('Whiskey');
                arr.push(' ');
                break;
            case 'x':
                arr.push('Xray');
                arr.push(' ');
                break;
            case 'y':
                arr.push('Yankee');
                arr.push(' ');
                break;
            case 'z':
                arr.push('Zulu');
                arr.push(' ');
                break;
            default:
                arr.push('');
        }
    }
    return arr.join('');
}

console.log(to_nato('ban ana'));
