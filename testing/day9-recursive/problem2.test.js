// Problem 2 - Find the Largest Number in an Array

const largestNumber = require('../../day9-recursive/problem2')

describe('Problem 2 - Find The Largest Number in an Array', () => { 
    test('Test case 1', () => { 
        expect(largestNumber([5, 2, 67, 37, 85, 19, 10])).toEqual(85);
    });
    
    test('Test case 2', () => { 
        expect(largestNumber([5, 10, 20, 3, 98, 95])).toEqual(98);
    });

    test('Test case 3', () => { 
        expect(largestNumber([20, 22, 18, 25, 75, 62, 88])).toEqual(88);
    });

    test('Test case 4', () => { 
        expect(largestNumber([6, 23, 9, 5])).toEqual(23);
    });

    test('Test case 5', () => { 
        expect(largestNumber([70, 44, 28, 18, 55, 68, 11])).toEqual(70);
    });
});