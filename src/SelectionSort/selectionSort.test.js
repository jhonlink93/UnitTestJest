const selectionSort = require('./selectionSort.js');
test('test selection',()=>{
    expect(selectionSort([2,1])).toEqual([1,2]);
}
);