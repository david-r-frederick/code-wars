//Pirate Island Conquer Part 1
//https://www.codewars.com/kata/59604925a68b04598e00001e/javascript

function conquerIsland(map) {
    let uSums = [];
    let mSums = [];
    let smallestDistance = 15;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            const distance = i + j;
            if (map[i][j] === 'm') {
                mSums.push([distance, [i, j]]);
            } else if (map[i][j] === 'u') {
                uSums.push([distance, [i, j]]);
            }
        }
    }
    if(uSums.length > 0){
        smallestDistance = Math.min(...uSums.map(el => el[0]));
        return uSums.filter(el => el[0] === smallestDistance).map(element => element[1]);
    } else if (mSums.length > 0){
        smallestDistance = Math.min(...mSums.map(el => el[0]));
        return mSums.filter(el => el[0] === smallestDistance).map(element => element[1]);
    } else {
        return [];
    }
}