//Unique String Characters

// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
// For example:
// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 

solve = (a,b) => {
    let arr = [];
    a.split('').forEach(el => {
        if(!b.includes(el)){
            arr.push(el);
        }
    })
    b.split('').forEach(el => {
        if(!a.includes(el)){
            arr.push(el);
        }
    })
    return arr.sort().join('');
};

console.log(solve("xyab","xzca"));