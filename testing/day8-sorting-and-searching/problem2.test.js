const playingDomino = require('../../day8-sorting-and-searching/problem2');

describe('Problem 2 - Play Domino', () => { 
    test('Test case 1', () => { 
        expect(playingDomino([[6, 5], [3, 4], [2, 1], [3, 3]], [4, 3])).toEqual([3,4]);
    });
    
    test('Test case 2', () => { 
        expect(playingDomino([[6, 5], [3, 3], [3, 4], [2, 1]], [3, 6])).toEqual([6,5]);
    });

    test('Test case 3', () => { 
        expect(playingDomino([[6, 6], [2, 4], [3, 6]], [5, 1])).toEqual([]);
    });
});