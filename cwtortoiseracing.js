//Tortoise Racing

function race(v1, v2, lead) {
    if (v1 > v2) {
        return null;
    } else {
        let speedDifference = v2 - v1;
        let timeItTakesDecimal = lead / speedDifference;
        let totalInSeconds = Math.floor(timeItTakesDecimal * 3600);
        let hours = Math.floor(totalInSeconds / 3600);
        totalInSeconds = totalInSeconds % 3600;
        let minutes = Math.floor(totalInSeconds / 60);
        totalInSeconds = totalInSeconds % 60;
        return [hours, minutes, totalInSeconds];
    }
}

console.log(race(720, 850, 70));
