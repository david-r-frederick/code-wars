function longestMotif (seq) {
    const suffixes = {};
    for(let i = 0; i < seq.length; i++){
        suffixes[i] = seq.slice(i);
    }
    const vals = Object.values(suffixes).sort(); //sorted values
    const possibleAnswers = [];
    for(let i = 0; i < seq.length - 1; i++){
        const first = vals[i];
        const second = vals[i + 1];
        const possibleAns = [];
        for(let j = 0; j < seq.length; j++){
            if(first[j] === second[j]){
                possibleAns.push(first[j]);
            } else {
                break;
            }
        }
        possibleAnswers.push(possibleAns);
    }
    let answer = [];
    possibleAnswers.forEach(el => {
        if(el.length > answer.length){
            answer = el;
        }
    });
    const filtered = possibleAnswers.filter(el => el.length === answer.length).map(el => el.join(''));
    for(let i = filtered.length - 1; i >= 0; i--){
        
    }
}

console.log(longestMotif('ATGTTAAC'));