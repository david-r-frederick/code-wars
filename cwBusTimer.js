function busTimer(time) {
    const [hours, minutes] = time.split(':').map((el) => +el);
    if (hours >= 6 && hours <= 23) {
        if (minutes <= 55) {
            return Math.ceil(minutes / 15) * 15 - minutes - 5 >= 0
                ? Math.ceil(minutes / 15) * 15 - minutes - 5
                : Math.ceil(minutes / 15) * 15 - minutes - 5 + 15;
        } else {
            if (hours === 23) {
                return minutes <= 55
                    ? 60 - minutes + 360 + 10
                    : 60 - minutes + 360 - 5;
            } else {
                return 60 - minutes + 10;
            }
        }
    } else {
        const minutesTilSix = 360 - minutes - hours * 60;
        return minutesTilSix - 5 >= 0
            ? minutesTilSix - 5
            : minutesTilSix - 5 + 15;
    }
}

console.log(busTimer('6:11'));
