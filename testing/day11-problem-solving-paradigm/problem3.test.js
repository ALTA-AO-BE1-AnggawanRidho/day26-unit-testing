// Problem 3 - Dragon of Loowater

const dragonOfLoowater = require('../../day11-problem-solving-paradigm/problem3');

describe('Tugas Problem 3 - Dragon of Loowater', () => { 
    test('Test 1', () => { 
        expect(dragonOfLoowater([5, 4], [7, 8, 4])).toEqual(11);
    });

    test('Test 2', () => { 
        expect(dragonOfLoowater([5, 10], [5])).toEqual(`knight fall`);
    });

    test('Test 3', () => { 
        expect(dragonOfLoowater([7, 2], [4, 3, 1, 2])).toEqual(`knight fall`);
    });

    test('Test 4', () => { 
        expect(dragonOfLoowater([7, 2], [2, 1, 8, 5])).toEqual(10);
    });
 });