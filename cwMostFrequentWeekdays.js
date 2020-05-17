//Most Frequent Weekdays
// What is your favourite day of the week? Check if it's the most frequent day of the week in the year.
// You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

// Input: Year as an int.
// Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

// Preconditions:
    // Week starts on Monday.
    // Year is between 1583 and 4000.
    // Calendar is Gregorian.
    // Example:

// mostFrequentDays(2427) => ['Friday']
// mostFrequentDays(2185) => ['Saturday']
// mostFrequentDays(2860) => ['Thursday', 'Friday']

mostFrequentDays = year => {
    const weekDays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];
    //No years before 1583 are tested for (Gregorian Calendar started in 1583)
    let baseYear = 1583;
    let firstDayIndex = weekDays.indexOf('Saturday');
    //No years after 4000 are tested for, hence i <= (4000 - 1583)
    for (let i = 0; i <= 2417; i++) {
        //if year is a leap year, return answer based on that
        if(baseYear === year){
            if((baseYear - 1580) % 4 === 0){
                const secondDay = weekDays[firstDayIndex + 1] === undefined ? 'Monday' : weekDays[firstDayIndex + 1];
                if (baseYear % 400 === 0 || baseYear % 400 !== 0 && baseYear % 100 !== 0) {
                    return weekDays[firstDayIndex] === 'Sunday' ? [secondDay, weekDays[firstDayIndex]] : [weekDays[firstDayIndex], secondDay]
                } else {
                    return [weekDays[firstDayIndex]];
                }
            } else {
                return [weekDays[firstDayIndex]];
            }
        }
        //moves the day forward (considers Sunday/Monday change)
        firstDayIndex = firstDayIndex === 6 ? 0 : firstDayIndex + 1;
        //checks if current year is leap year and/or divisible by 100 and 400
        if ((baseYear - 1580) % 4 === 0) {
            if (baseYear % 400 === 0 || baseYear % 400 !== 0 && baseYear % 100 !== 0) {
                firstDayIndex++;
                    if (firstDayIndex === 7) {
                        firstDayIndex = 0;
                    }
            }
        }
        baseYear++;
    }
}
console.log(mostFrequentDays(2001));
