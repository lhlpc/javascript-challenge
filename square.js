function arraySquares(array) {
    const responseArray = [];
    for(let i = 0; i < array.length; i++) {
        responseArray.push(Math.pow(array[i], 2))
    }
    responseArray.sort((a, b) => a-b)
    return responseArray;
}

console.log(arraySquares([1, 2, 3, 5, 6, 8, 9])) // Correct output:  [1, 4, 9, 25, 36, 64, 81]
console.log(arraySquares([-2, -1])) // Correct output:  [1, 4]
console.log(arraySquares([-10, -5, 0, 5, 10])) // Correct output: [0, 25, 25, 100, 100]
