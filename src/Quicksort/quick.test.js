const quickSort = require('./quickSort.js');
test('test quick',()=>{
    expect(quickSort([2,1])).toEqual([1,2]);
}
);