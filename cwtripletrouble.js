let str = '';

function tripleTrouble(one, two, three) {
    if(one.length === 0){
        return str;
    } else {
        str += one[0] + two[0] + three[0];
        // console.log(str);
        return tripleTrouble(one.substring(1), two.substring(1), three.substring(1));
    }
}

console.log(tripleTrouble("LLh","euo","xtr"));
