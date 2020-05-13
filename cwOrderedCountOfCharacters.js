//Ordered Count of Characters
// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.
// Example:
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

function orderedCount(text) {
    let splitter = text.split('');
    let reducedArray = Array.from([...new Set(splitter)]);
    for(let i = 0; i < reducedArray.length; i++){
        let count = 0;
        splitter.forEach(element => {
            if(element === reducedArray[i]){
                count++;
            }
        });
        reducedArray[i] = [reducedArray[i], count];
    }
    return reducedArray;
}