//Find the Parity Outlier
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

findOutlier = (integers) => {
    const oddCount = integers
        .slice(0, 3)
        .map((el) => (Math.abs(el % 2) === 1 ? 1 : 0))
        .reduce((x, y) => x + y);
    return integers.filter(
        (el) => Math.abs(el % 2) === (oddCount > 1 ? 0 : 1)
    )[0];
};