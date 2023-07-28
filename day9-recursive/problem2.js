// Problem 2 - Find the Largest Number in an Array
function largestNumber(array) {
    // your code here
    if (array.length === 1) {
        return array[0]
    } if (array.length === 2) {
        return (array[0] > array[1]) ? array[0] : array[1]
    }
    /**
     * Kode di bawah ini akan berjalan apabila jumlah array lebih dari 2
     * Code below will be executed only if the array length is more than 2
     */
    let largestTemp = largestNumber(array.slice(1))
    return (array[0] > largestTemp) ? array[0] : largestTemp
}


// console.log(largestNumber([5, 2, 67, 37, 85, 19, 10])) // 85
// console.log(largestNumber([5, 10, 20, 3, 98, 95])) // 98
// console.log(largestNumber([20, 22, 18, 25, 75, 62, 88])) // 88
// console.log(largestNumber([6, 23, 9, 5])) // 23
// console.log(largestNumber([70, 44, 28, 18, 55, 68, 11])) // 70

module.exports = largestNumber;