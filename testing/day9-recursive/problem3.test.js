// Problem 3 - Fibonacci

const fibonacci = require('../../day9-recursive/problem3')

describe('Problem 3 - Find fibonacci n-number', () => { 
    test('Test case 1', () => { 
        expect(fibonacci(0)).toEqual(0);
    });
    
    test('Test case 2', () => { 
        expect(fibonacci(2)).toEqual(1);
    });

    test('Test case 3', () => { 
        expect(fibonacci(9)).toEqual(34);
    });

    test('Test case 4', () => { 
        expect(fibonacci(10)).toEqual(55);
    });

    test('Test case 5', () => { 
        expect(fibonacci(12)).toEqual(144);
    });
});