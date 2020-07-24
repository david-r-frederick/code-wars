//Count Characters in Your String

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
    const answer = {};
    string.split('').forEach(el => {
        if(answer[el]){
            answer[el] += 1;
        } else {
            answer[el] = 1;
        }
    });
    return answer;
}

console.log(count('aba'));