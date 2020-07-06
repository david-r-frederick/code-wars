//London CityHacker
// You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.
// ['Northern', 'Central', 243, 1, 'Victoria']
// Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.
// Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx

function londonCityHacker(journey) {
    journey = journey.map(el => typeof el === 'string' ? 2.4 : 1.5);
    for(let i = 0; i < journey.length; i++){
        if(journey[i] === 1.5 && journey[i + 1] === 1.5){
            journey.splice(i + 1, 1);
        }
    }
    return journey.length > 0 ? `£${journey.reduce((a, b) => a + b).toFixed(2)}` : '£0.00';
}