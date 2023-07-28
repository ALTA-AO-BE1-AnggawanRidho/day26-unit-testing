const mostAppearItem = require('../../day8-sorting-and-searching/problem3');

describe('Problem 3 - Most Appear Item', () => { 
    test('Test case 1', () => { 
        expect(mostAppearItem(["js", "js", "golang", "ruby", "ruby", "js", "js"])).toEqual(`golang->1 ruby->2 js->4 `);
    });
    
    test('Test case 2', () => { 
        expect(mostAppearItem(["A", "B", "B", "C", "A", "A", "B", "A", "D", "D"])).toEqual(`C->1 D->2 B->3 A->4 `);
    });

    test('Test case 3', () => { 
        expect(mostAppearItem(["football", "basketball", "tenis"])).toEqual(`football->1 basketball->1 tenis->1 `);
    });
});