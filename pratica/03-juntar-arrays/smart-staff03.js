const firstArray = [0, 1, 2, 3, 4, 5]
const secondArray = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
const thirdArray = [6, 7, 8, 9, 10]

const finalArray = [...firstArray, ...secondArray, ...thirdArray]

console.log(finalArray)