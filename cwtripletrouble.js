//Triple Trouble

// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

let str = '';
function tripleTrouble(one, two, three) {
    if (one.length === 0) {
        str2 = str;
        str = '';
        return str2;
    } else {
        str += one[0] + two[0] + three[0];
        return tripleTrouble(
            one.substring(1),
            two.substring(1),
            three.substring(1)
        );
    }
}
