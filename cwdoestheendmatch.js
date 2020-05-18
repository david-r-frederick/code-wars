
function solution (string, ending){
    string = Array.from(string).reverse().join('');
    ending = Array.from(ending).reverse().join('');
    if(string.startsWith(ending)){return true} else {return false};
}

console.log(solution('foo', 'oo'));
