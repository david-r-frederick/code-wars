//80's Kids #1: How Many Licks Does It Take?

// How many licks does it take to get to the tootsie roll center of a tootsie pop?
// A group of engineering students from Purdue University reported that its licking machine, modeled after a human tongue, took an average of 364 licks to get to the center of a Tootsie Pop. Twenty of the group's volunteers assumed the licking challenge-unassisted by machinery-and averaged 252 licks each to the center.
// Your task, if you choose to accept it, is to write a function that will return the number of licks it took to get to the tootsie roll center of a tootsie pop, given some environmental variables.
// Everyone knows it's harder to lick a tootsie pop in cold weather but it's easier if the sun is out. You will be given an object of environmental conditions for each trial paired with a value that will increase or decrease the number of licks. The environmental conditions all apply to the same trial.
// Assuming that it would normally take 252 licks to get to the tootsie roll center of a tootsie pop, return the new total of licks along with the condition that proved to be most challenging (causing the most added licks) in that trial.

// Example:
// totalLicks({ "freezing temps": 10, "clear skies": -2 });
// Should return:

// "It took 260 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge

function totalLicks(env) {
    const total = Object.keys(env).reduce((x, y) => x + env[y], 252);
    const arr = Object.values(env);
    const max = Math.max(...arr);
    for (const n in env) {
        if (env[n] === max) {
            var worstCondition = n;
        }
    }
    let returnStr = `It took ${total} licks to get to the tootsie roll center of a tootsie pop.`
    if (max > 0) {
        return returnStr + ` The toughest challenge was ${worstCondition}.`;
    } else {
        return returnStr;
    }
}

console.log(totalLicks({ 'freezing temps': 20, 'clear skies': -2 }));
