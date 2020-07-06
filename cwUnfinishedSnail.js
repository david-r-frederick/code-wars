snail = function(array) {
    const answers = [];
    let n = 0;
    let direction = 1;
    array.forEach(el => n += el.length);
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(j === array[i].length){
                direction = 2;
                i = 1;
                j--;
                answers.push(array[i][j]);
            }
            answers.push(array[i][j]);
        }
    }
    return n;
  }

  console.log(snail(
   [[1,2,3],
    [8,9,4],
    [7,6,5]]));