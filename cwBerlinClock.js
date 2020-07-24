//Berlin Clock

// https://www.codewars.com/kata/5a1463678ba9145a670000f9/javascript

function berlinClock(time) {
    const timeAsNumbers = time.split(':').map(el => parseInt(el));
    const secondLight = timeAsNumbers[2] % 2 === 0 ? 'Y' : 'O';
    const howManyFiveHr = (timeAsNumbers[0] - (timeAsNumbers[0] % 5)) / 5;
    const howManyOneHr = timeAsNumbers[0] % 5;
    const howManyFiveMin = (timeAsNumbers[1] - (timeAsNumbers[1] % 5)) / 5;
    const howManyOneMin = timeAsNumbers[1] % 5;
    const fiveHoursLights = [];
    const oneHourLights = [];
    const fiveMinutesLights = [];
    const oneMinuteLights = [];
    for(let i = 0; i < 4; i++){
        fiveHoursLights[i] = i < howManyFiveHr ? 'R' : 'O';
        oneHourLights[i] = i < howManyOneHr ? 'R' : 'O';
        oneMinuteLights[i] = i < howManyOneMin ? 'Y' : 'O';
    }
    for(let i = 0; i < 11; i++){
        if(i < howManyFiveMin){
            if(i === 2 || i === 5 || i === 8){
                fiveMinutesLights[i] = 'R';
            } else {
                fiveMinutesLights[i] = 'Y';
            }
        } else {
            fiveMinutesLights[i] = 'O';
        }
    }
    return [secondLight, fiveHoursLights.join(''), oneHourLights.join(''), fiveMinutesLights.join(''), oneMinuteLights.join('')].join('\n');
}

console.log(berlinClock('12:56:01'));