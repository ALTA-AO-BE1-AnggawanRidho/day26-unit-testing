// Problem 1 - Frog

const frog = require('../../day11-problem-solving-paradigm/problem1');

describe('Tugas Problem 1 - Frog', () => { 
    test('Test 1', () => { 
        expect(frog([10, 30, 40, 20])).toEqual(30);
    });

    test('Test 2', () => { 
        expect(frog([30, 10, 60, 10, 60, 50])).toEqual(40);
    });
 });