// Problem 2 - Simple Equations

const simpleEquations = require('../../day11-problem-solving-paradigm/problem2');

describe('Tugas Problem 2 - Simple Equations', () => { 
    test('Test 1', () => { 
        expect(simpleEquations(1, 2, 3)).toEqual(null);
    });

    test('Test 2', () => { 
        expect(simpleEquations(6, 6, 14)).toEqual([1, 2, 3]);
    });
 });