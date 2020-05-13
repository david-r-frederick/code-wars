//Total amount of points

// function points(games) {
//     let count = 0;
//     for (let i = 0; i < games.length; i++) {
//         if (games[i][0] > games[i][2]) {
//             count += 3;
//         } else if (games[i][0] < games[i][2]) {
//             count += 0;
//         } else {
//             count++;
//         }   
//     }
//     return count;
// }

function points(games) {
    let count = 0;
    games.forEach(miniArr => {
        if (miniArr[0] > miniArr[2]) {
            count += 3;
        } else if (miniArr[0] === miniArr[2]) {
            count++
        }
    }
    )
    return count;
}
