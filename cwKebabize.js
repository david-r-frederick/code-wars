//Kebabize

// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i]) || str[i] === '0') {
            continue;
        } else {
            if (str[i] === str[i].toUpperCase()) {
                if (arr.length === 0) {
                    arr.push(str[i].toLowerCase());
                } else {
                    arr.push('-');
                    arr.push(str[i].toLowerCase());
                }
            } 
            else {
                arr.push(str[i]);
            }
        }
    }
    return arr.join('');
}