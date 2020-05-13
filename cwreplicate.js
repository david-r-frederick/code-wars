function replicate(times, number) {
    return replicateHelper(times, number, []);
}

function replicateHelper (times, number) {
    if (times <= 0){
        return [];
    } else {
        return [number, ...replicateHelper(times - 1, number)];
        // [5, replicateHelper(4, 5)]
        // [5, replicateHelper(3, 5)]
        // [5, replicateHelper(2, 5)]
        // [5, replicateHelper(1, 5)]
        // [5, replicateHelper(0, 5)]
        // []
    }
}

console.log(replicate(3, 5));