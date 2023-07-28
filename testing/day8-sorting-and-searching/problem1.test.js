const maximumBuyProduct = require('../../day8-sorting-and-searching/problem1');

describe('Problem 1 - Most Appear Item', () => { 
    test('Test case 1', () => { 
        expect(maximumBuyProduct(50000, [25000, 25000, 10000, 14000])).toEqual(3);
    });
    
    test('Test case 2', () => { 
        expect(maximumBuyProduct(30000, [15000, 10000, 12000, 5000, 3000])).toEqual(4);
    });

    test('Test case 3', () => { 
        expect(maximumBuyProduct(10000, [2000, 3000, 1000, 2000, 10000])).toEqual(4);
    });

    test('Test case 4', () => { 
        expect(maximumBuyProduct(4000, [7500, 3000, 2500, 2000])).toEqual(1);
    });

    test('Test case 5', () => { 
        expect(maximumBuyProduct(0, [10000, 30000])).toEqual(0);
    });
});